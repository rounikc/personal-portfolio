import { getMessages, type Message } from '@/services/message-service';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function formatReceivedDate(isoString: string) {
  const date = new Date(isoString);
  return date.toLocaleString('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
  });
}

export default async function MessagesPage() {
  const messages = await getMessages();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 border-b border-primary/20 bg-background/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <h1 className="text-2xl font-bold">
            Contact <span className="text-primary">Messages</span>
          </h1>
           <Button asChild>
            <Link href="/">Back to Portfolio</Link>
          </Button>
        </div>
      </header>

      <main className="container py-8">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/50 p-12 text-center">
            <h2 className="text-2xl font-semibold">No Messages Yet</h2>
            <p className="mt-2 text-muted-foreground">
              When someone sends a message through your contact form, it will appear here.
            </p>
          </div>
        ) : (
          <div className="grid gap-6">
            {messages.map((msg, index) => (
              <Card key={index} className="border-accent/40 shadow-[0_0_10px_hsl(var(--accent)/0.3)]">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                        <CardTitle className='text-accent drop-shadow-[0_0_8px_hsl(var(--accent))]'>{msg.subject}</CardTitle>
                        <CardDescription className="pt-2">
                            From: <a href={`mailto:${msg.email}`} className="text-primary hover:underline">{msg.name}</a>
                        </CardDescription>
                    </div>
                    <time className="text-sm text-muted-foreground">
                        {formatReceivedDate(msg.receivedAt)}
                    </time>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="whitespace-pre-wrap rounded-md bg-muted/50 p-4 font-mono text-sm">
                    {msg.message}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
