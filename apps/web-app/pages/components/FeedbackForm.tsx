import { useState } from "react";
import { Box, Button, Textarea } from "@chakra-ui/react";

export default function FeedbackForm() {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async () => {
    await fetch("/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ feedback }),
    });
    setFeedback("");
    alert("Thank you for your feedback!");
  };

  return (
    <Box>
      <Textarea
        value={feedback}
        onChange={e => setFeedback(e.target.value)}
        placeholder="Report a bug or request a feature..."
        mb={2}
      />
      <Button onClick={handleSubmit}>Submit</Button>
    </Box>
  );
}