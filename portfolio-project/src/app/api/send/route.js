//import { EmailTemplate } from '../../../components/EmailTemplate';
//import {NextResponse} from "next/server";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function handler(req,res) {
  try {
    /*const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: ['josephwilliamgarner@gmail.com'],
      subject: 'Hello world',
      react: (
        <>
            <p>Email Body</p>
        </>
      ),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }*/

      const data = req.body

    return res.json(data);
  } catch (error) {
    console.log(error) 
    return NextResponse.json({ error }, { status: 500 });
  }
}