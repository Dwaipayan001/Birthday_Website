import Image from "next/image";

const moments = [
  {
    number: "01",
    title: "The peace you bring",
    text: "It does not have to be a deep conversation. Somehow, simply talking to you makes the noise inside me settle and the world feel easier to carry.",
  },
  {
    number: "02",
    title: "The person you helped me become",
    text: "More than one piece of advice, you changed the way I look at myself. Knowing you pushed me to confront my faults, grow beyond them, and become a better person.",
  },
  {
    number: "03",
    title: "Your forgiving heart",
    text: "You found the grace to forgive me after I had given you reasons not to. I will never treat that kindness lightly, nor forget what it taught me about the size of your heart.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a className="wordmark" href="#top" aria-label="Back to the beginning">12 / 01</a>
        <span>A small corner of the world, made for Debarati</span>
      </header>

      <section className="hero" id="top">
        <div>
          <p className="eyebrow">For Debarati · January 12</p>
          <h1>Some people feel<br />like <em>home.</em></h1>
          <p className="intro">
            You are one of those rare people whose presence makes the noise in my mind grow quiet.
            This is not a question, or a request. It is simply a celebration of you—and everything
            your existence means to me.
          </p>
          <a className="textLink" href="#letter">Read my letter <span>↓</span></a>
        </div>
        <figure className="heroPortrait">
          <div className="photoFrame">
            <Image src="/her-portrait.jpeg" alt="Debarati smiling in a black outfit" fill priority sizes="(max-width: 800px) 86vw, 31vw" className="cover" />
          </div>
          <figcaption>That smile—the kind that makes everything around it feel lighter.</figcaption>
        </figure>
      </section>

      <div className="ticker" aria-hidden="true">
        <div><span>HAPPY BIRTHDAY, DEBARATI</span><i>✦</i><span>TO THE KINDEST SOUL</span><i>✦</i><span>HAPPY BIRTHDAY, DEBARATI</span><i>✦</i><span>TO THE KINDEST SOUL</span><i>✦</i></div>
      </div>

      <section className="meaning">
        <div className="sectionNumber">01</div>
        <div><p className="eyebrow">What you mean to me</p><h2>In the little things,<br />you are everywhere.</h2></div>
        <div className="moments">
          {moments.map((moment) => (
            <article className="moment" key={moment.number}>
              <span>{moment.number}</span><h3>{moment.title}</h3><p>{moment.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="interlude">
        <div className="interludePhoto">
          <Image src="/her-blue.jpeg" alt="Debarati in a blue saree, looking into the distance" fill sizes="(max-width: 800px) 100vw, 50vw" className="cover" />
        </div>
        <blockquote><span>“</span>Pocket-sized in height, perhaps—but with a presence vast enough to change an entire room, and my entire world.</blockquote>
      </section>

      <section className="songSection" aria-labelledby="song-title">
        <div className="songIntro">
          <p className="eyebrow">A song that makes me think of you</p>
          <h2 id="song-title">তোর কথা মনে করিয়ে দেয় যে গানটা</h2>
          <p lang="bn">
            গানটার প্রতিটি কথা হয়তো আমাদের গল্পের সঙ্গে মেলে না। তবু এর মধ্যে এমন কিছু
            অনুভূতি আছে, যা শুনলেই আমার তোর কথা মনে পড়ে।
          </p>
        </div>
        <div className="videoWrap">
          <iframe
            src="https://www.youtube-nocookie.com/embed/GhQxrCrVSyw?start=32&rel=0"
            title="Until I Found You by Stephen Sanchez"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <a
          className="youtubeLink"
          href="https://www.youtube.com/watch?v=GhQxrCrVSyw"
          target="_blank"
          rel="noreferrer"
        >
          Open on YouTube <span aria-hidden="true">↗</span>
        </a>
      </section>

      <section className="letterSection" id="letter">
        <div className="letterHeading"><p className="eyebrow">The words I most wanted to say</p><h2>A letter, with<br />an open hand.</h2></div>
        <article className="letter" lang="bn">
          <p className="salutation">প্রিয় দেবারতি,</p>
          <p>
            তোর জন্মদিনে শুধু এটাই চাই—তুই অন্যদের জীবনে যে আনন্দ এত সহজে ছড়িয়ে দিস,
            সেই আনন্দই যেন আজ তোকে চারদিক থেকে ঘিরে রাখে। তোর জীবনের এই নতুন বছরটা যেন
            তোর প্রতি খুব নরম হয়, সুন্দর সব চমক নিয়ে আসে, আর তোকে বারবার সেই অসম্ভব সুন্দর
            হাসিটা হাসার কারণ দেয়।
          </p>
          <p>
            তোর সঙ্গে কথা বললেই আমি এমন একটা শান্তি পাই, যেটা আর কোথাও খুঁজে পাই না। কথাটা
            গভীর কিছু হোক বা একেবারে সাধারণ—তোর সঙ্গে কথা বলাটাই আমার মনের সমস্ত কোলাহল
            একটু থামিয়ে দেয়। আমার জীবনের ছোট ছোট ঘটনাগুলো তোকে বলতে ইচ্ছে করে, সবকিছুতে
            তোর মতামত জানতে ইচ্ছে করে। এমন নয় যে আমি নিজে সিদ্ধান্ত নিতে পারি না; আসলে তোকে,
            তোর ভাবনাকে আর তোর বিচারবুদ্ধিকে আমি এতটাই সম্মান করি। তোর শুধু থাকাটুকুই আমার
            জীবনকে একটু শান্ত, একটু উষ্ণ, আর অনেকটা পরিপূর্ণ করে দেয়।
          </p>
          <p>
            আমি জানি, আমাদের গল্পে সুন্দর স্মৃতির পাশাপাশি কষ্টও আছে। আমার অহংকার আর তোর সঙ্গে
            আমার ব্যবহার তোকে এমন কষ্ট দিয়েছিল, যেটা তোর কোনোদিনই প্রাপ্য ছিল না। তুই আমাকে
            ক্ষমা করেছিস—এই কথাটা আমি কৃতজ্ঞতা আর বিনয়ের সঙ্গেই মনে রাখি। সেই ক্ষমা অতীতকে
            মুছে দেয় না, আর তোকে নতুন করে কিছু চাওয়ার অধিকারও আমাকে দেয় না। তুই শুধু আমাকে
            কোনো একটা পরামর্শ দিসনি; তুই আমাকে নিজের ভুলগুলোর সামনে সৎভাবে দাঁড়াতে শিখিয়েছিস,
            বদলাতে শিখিয়েছিস, আরও ভালো মানুষ হতে শিখিয়েছিস। আজ আমার মধ্যে যতটুকু ভালো পরিবর্তন
            এসেছে, তার মধ্যে তোর শেখানো অনেকটা আলো মিশে আছে।
          </p>
          <p className="relationshipNote">
            তাই এই চিঠিটা তোকে ফিরে আসতে বলার জন্য নয়। আমার সঙ্গে থেকে তোকে যা সহ্য করতে হয়েছে,
            তার পরে তোর কাছে সেই দাবি করার মতো জায়গায় আমি নেই। আমি এখন জানি, তোর জীবনে একজন
            আছে। কথাটা আমি জানি—শুধু এটুকুই তোকে জানাতে চাইলাম।
          </p>
          <p>
            আমি শুধু চাই তুই জানিস—তুই এখনও আমার কাছে ভীষণ মূল্যবান। তোর জন্য আমার যত্ন কোনো
            বিনিময়ের হিসেব নয়; এর কোনো শর্ত নেই, কোনো উত্তর পাওয়ার দাবিও নেই। কোনোদিন জীবন কঠিন
            হয়ে উঠলে, কোনো চেনা কণ্ঠের দরকার হলে, অথবা শুধু কাউকে নিজের পাশে চাইলে—আমাকে পাবি।
            তোর সীমারেখাকে সম্মান করেই থাকব, বিনিময়ে কিছু না চেয়ে।
          </p>
          <p>
            তুই আমার গোটা পৃথিবী—তার মানে এই নয় যে তোর পৃথিবীতে আমাকে জায়গা দিতেই হবে। বরং
            তোকে চিনেই আমি বুঝেছি, একজন মানুষ আরেকজনের কাছে কতটা গভীরভাবে গুরুত্বপূর্ণ হয়ে উঠতে
            পারে। তুই আমার মনের ভেতরের গোটা মানচিত্রটাই বদলে দিয়েছিস। সেই জন্য আমি সবসময় তোর
            কাছে কৃতজ্ঞ থাকব।
          </p>
          <p className="noReply">এই লেখাটার উত্তর তোকে দিতেই হবে—এমন কোনো প্রত্যাশা আমার নেই। তোর কাছে কিছু চাওয়ার জন্যও এটা লেখা নয়। শুধু আমার মনের কথাগুলো তোর কাছে রেখে যেতে চেয়েছিলাম।</p>
          <p className="closing">শুভ জন্মদিন, দেবারতি।</p>
          <p className="signature">সবসময় তোর ভালো চাইব।</p>
        </article>
      </section>

      <section className="wish">
        <div>
          <p className="eyebrow">My wish for your next chapter</p>
          <h2>May you always choose<br />the life that chooses you.</h2>
          <p className="wishText">May it be full of soft mornings, brave decisions, loud laughter, people who honour your heart, and a thousand reasons to feel proud of the person you are becoming.</p>
        </div>
        <figure className="wishPhoto">
          <Image src="/her-silver.jpeg" alt="Debarati smiling in a silver saree" fill sizes="(max-width: 800px) 88vw, 36vw" className="cover" />
          <figcaption>Quietly herself—and effortlessly unforgettable.</figcaption>
        </figure>
      </section>

      <footer><p>Made with a full heart, for Debarati.</p><p>January 12 · Every year, a reason to celebrate you.</p></footer>
    </main>
  );
}
