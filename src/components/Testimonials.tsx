export default function Testimonials() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-8 sm:py-16 lg:px-4">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <h1 className="text-4xl text-black font-bold text-center pb-8">Testimonials</h1>
        <img
          alt=""
          src="https://lh3.googleusercontent.com/d_S5gxu_S1P6NR1gXeMthZeBzkrQMHdI5uvXrpn3nfJuXpCjlqhLQKH_hbOxTHxFhp5WugVOEcl4WDrv9rmKBDOMExhKU5KmmLFQVg"
          className="mx-auto h-12"
        />
        <figure className="mt-10">
          <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
            <p>
              “
                Ushbu platformadan ikki oydan beri foydalanib kelmoqdamiz. Bu sayt bizning Kadrlar bilan mavjud bo'lgan ko'plab muammolarni yechishimizda yordam berdi. Platformadagi avtomatik malakani baholash xizmati orqali bizning talablarimizga mos xodimlarni juda ham oson topmoqdamiz. Hamkorlikdan juda ham mamnunmiz!
              ”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              alt=""
              src="https://lh3.googleusercontent.com/5_Jv6g9l2OSa_xKX89kk1TcIfRjvl4jAepvQ3V6yf0A81TZLGWeGMe3vaj0bVMNzssvZQ2Iehq0YEjPgg2XkpsoYjIJerQ65CHzPWiU"
              className="mx-auto size-10 rounded-full"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">Flutter</div>
              <svg
                width={3}
                height={3}
                viewBox="0 0 2 2"
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className="text-gray-600">Developed by Google</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
