interface MailboxProps {
  username: string;
  unreadMessage: string[];
}

export default function Mailbox({ username, unreadMessage }: MailboxProps) {
  return (
    <>
      <p>Hello {username}</p>
      <p>
        {unreadMessage.length > 0
          ? `You have ${unreadMessage.length} unread messages`
          : 'No unread messages'}
      </p>
    </>
  );
}
