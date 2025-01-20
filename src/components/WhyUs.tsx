export default function WhyUs() {
  return (
    <div className="grid grid-cols-4 gap-6 items-start justify-between rounded-2xl bg-[#208afd] text-white lg:px-16 md:px-12 sm:px-8 max-sm:px-4 py-8 md:grid-cols-4 sm:grid-cols-2 max-sm:grid-cols-1">
      <div className="relative">
        <h2 className="block text-2xl font-bold">
          Ish va amaliyotga joylashish endi yanada qulay hamda tez!
        </h2>
      </div>
      <div>
        <span className="text-4xl font-bold">500+</span>
        <p className="leading-tight pt-2">
          Bizning xizmatlarimizdan foydalanyotgan kompaniyalar
        </p>
      </div>
      <div>
        <span className="text-4xl font-bold">10 000+</span>
        <p className="leading-tight pt-2">
          Kurslarimizda o'qiyotgan va ishga joylashayotgan foydalanuvchilar
        </p>
      </div>
      <div>
        <span className="text-4xl font-bold">75+</span>
        <p className="leading-tight pt-2">
          Foydalanuvchilarimiz bilim va ko'nikmalarini oshirayotgan foydali kurs
          va qo'llanmalar
        </p>
      </div>
    </div>
  );
}
