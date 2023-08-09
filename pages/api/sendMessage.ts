import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function sendMessage(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== "POST") {
        return res.status(405).end();
    }

    const { msg } = req.body;

    try {
        const url: string = process.env.DISCORD_WEBHOOK_URL || "";
        const data = {
            content: msg,
            username: "mado portfolio",
        };

        const result = await axios.post(url, data);

        if (result.status === 204) {
            return res.status(204).end();
        } else {
            return res
                .status(500)
                .json({ error: "Failed to send the message to Discord." });
        }
    } catch (error) {
        console.error("failed to send message: ", error);
        return res
            .status(500)
            .json({ error: "Failed to send the message to Discord." });
    }
}
