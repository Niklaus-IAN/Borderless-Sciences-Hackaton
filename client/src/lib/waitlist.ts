const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSfjJweqq54qAjcpRPNuwsuLyAjd6xP9TLINd6agOxb2pSg1Lg/formResponse";

const NAME_ENTRY_ID = "entry.757200797";
const EMAIL_ENTRY_ID = "entry.8398629";

interface WaitlistPayload {
  name: string;
  email: string;
}

export const joinWaitlist = async ({ name, email }: WaitlistPayload) => {
  const formData = new FormData();
  formData.append(NAME_ENTRY_ID, name);
  formData.append(EMAIL_ENTRY_ID, email);

  await fetch(GOOGLE_FORM_ACTION, {
    method: "POST",
    mode: "no-cors",
    body: formData,
  });
};
