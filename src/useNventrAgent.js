import React, {
  useMemo,
  useState,
  useRef,
  useCallback,
  useEffect,
} from "react";
import nventrAgent from "@nventr.ai/nventr-agent";
export function useNventrAgent(defaultOptions = {}) {
  useEffect(() => {
    if (defaultOptions.render) {
      if (!defaultOptions.id && !defaultOptions.agentAccessKey)
        console.warn(
          "NventrAgent: Missing id or agentAccessKey. Cannot render agent."
        );
      else nventrAgent.render(defaultOptions);
    }
    return () => {
      nventrAgent.remove();
    };
  }, []);
  return {
    render: (options) => nventrAgent.render({ ...defaultOptions, ...options }),
    onRendered: (callback) => nventrAgent.onRendered(callback),
    setWebhookAccessToken: (webhookAccessToken) =>
      nventrAgent.setWebhookAccessToken(webhookAccessToken),
    removeWebhookAccessToken: () => nventrAgent.setWebhookAccessToken(null),
    setMcpAccessToken: (serverName, token) =>
      nventrAgent.setMcpAccessToken(serverName, token),
    removeMcpAccessToken: (serverName) =>
      nventrAgent.removeMcpAccessToken(serverName),
    setMetadata: (metadata) => nventrAgent.setMetadata(metadata),
    removeMetadata: () => nventrAgent.setMetadata(null),
    setContext: (context) => nventrAgent.setContext(context),
    clearContext: () => nventrAgent.clearContext(),
    setConversationUuid: (conversationUuid) =>
      nventrAgent.setConversationUuid(conversationUuid),
    removeConversationUuid: () => nventrAgent.setConversationUuid(null),
    addActionListener: (name, callback) =>
      nventrAgent.addActionListener(name, callback),
    onAction: (callback) => nventrAgent.onAction(callback),
    onActions: (callback) => nventrAgent.onActions(callback),
    restore: () => nventrAgent.restore(),
    collapse: () => nventrAgent.collapse(),
    fullscreen: () => nventrAgent.fullscreen(),
    remove: () => nventrAgent.remove(),
  };
}
