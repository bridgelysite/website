import { Resend } from "resend";

const resendKey = process.env.RESEND_API_KEY;

// Si la clé est absente (ex: pendant le build), on utilise une clé dummy pour ne pas faire planter le build
export const resend = new Resend(resendKey || "re_123456789");
