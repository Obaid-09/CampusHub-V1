import Button from "../ui/Button";
import Input from "../ui/Input";

const EmailSettings = () => {
  return (
    <div className="space-y-6">
      <Input label="SMTP Sender Email" value="admin@campushub.com" />

      <Input label="Reply-To Email" value="support@campushub.com" />

      <div className="flex justify-end">
        <Button>Send Test Email</Button>
      </div>
    </div>
  );
};

export default EmailSettings;
