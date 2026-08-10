import Reveal from "@/app/components/Reveal";
import { EMAIL } from "@/app/lib/content";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <Reveal>
        <div className="section-heading">
          <span className="num">04. What&apos;s Next?</span>
        </div>
        <h2>Let&apos;s Build Together.</h2>
        <p>
          目前对新的 AI 产品机会和自由职业合作保持开放。无论是全职机会、项目合作，还是 just say hi，
          都欢迎通过邮件联系，我通常会在 48 小时内回复。
        </p>
        <a href={`mailto:${EMAIL}`} className="btn btn-lg">
          发邮件给我
        </a>
      </Reveal>
    </section>
  );
}
