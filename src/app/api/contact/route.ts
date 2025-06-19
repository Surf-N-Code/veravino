import { NextResponse } from 'next/server';

const SLACK_WEBHOOK_URL = 'https://hooks.slack.com/services/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';

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    const response = await fetch(SLACK_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        blocks: [
          {
            type: "header",
            text: {
              type: "plain_text",
              text: "🍷 Neue Kontaktanfrage von Vera Vino",
              emoji: true
            }
          },
          {
            type: "section",
            fields: [
              {
                type: "mrkdwn",
                text: `*Name:*\n${formData.name}`
              },
              {
                type: "mrkdwn",
                text: `*Email:*\n${formData.email}`
              }
            ]
          },
          {
            type: "section",
            fields: [
              {
                type: "mrkdwn",
                text: `*Unternehmen:*\n${formData.company || 'Nicht angegeben'}`
              }
            ]
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: `*Nachricht:*\n${formData.message}`
            }
          }
        ]
      })
    });

    if (!response.ok) {
      throw new Error('Failed to send to Slack');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending message to Slack:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
} 