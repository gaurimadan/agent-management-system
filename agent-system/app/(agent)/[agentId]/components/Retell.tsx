import React, { useEffect, useState } from "react";
import { RetellWebClient } from "retell-client-js-sdk";
import { Button } from "../../../components/ui/button";

interface RegisterCallResponse {
  access_token: string;
}

interface RetellCallProps {
  agentId: string;
}

const RetellCallComponent: React.FC<RetellCallProps> = ({ agentId }) => {
  const [isCalling, setIsCalling] = useState(false);
  const retellWebClient = new RetellWebClient();

  useEffect(() => {
    
    retellWebClient.on("call_started", () => {
      console.log("Call started");
    });

    retellWebClient.on("call_ended", () => {
      console.log("Call ended");
      setIsCalling(false);
    });

    retellWebClient.on("agent_start_talking", () => {
      console.log("Agent started talking");
    });

    retellWebClient.on("agent_stop_talking", () => {
      console.log("Agent stopped talking");
    });

    retellWebClient.on("error", (error) => {
      console.error("An error occurred:", error);
      retellWebClient.stopCall();
      setIsCalling(false);
    });

    // Cleanup function to stop the call if component unmounts
    return () => {
      if (isCalling) {
        retellWebClient.stopCall();
      }
    };
  }, []);

  const toggleConversation = async () => {
    if (isCalling) {
      retellWebClient.stopCall();
      setIsCalling(false);
    } else {
      try {
        const registerCallResponse = await registerCall(agentId);
        if (registerCallResponse.access_token) {
          await retellWebClient.startCall({
            accessToken: registerCallResponse.access_token,
          });
          setIsCalling(true);
        }
      } catch (error) {
        console.error("Failed to start call:", error);
      }
    }
  };

  async function registerCall(agentId: string): Promise<RegisterCallResponse> {
    try {
      const response = await fetch("http://localhost:8080/create-web-call", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          agent_id: agentId,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: RegisterCallResponse = await response.json();
      return data;
    } catch (err) {
      console.error("Error registering call:", err);
      throw err;
    }
  }

  return (
    <Button 
      onClick={toggleConversation} 
      variant={isCalling ? "destructive" : "default"}
    >
      {isCalling ? "Stop Call" : "Start Call"}
    </Button>
  );
};

export default RetellCallComponent;