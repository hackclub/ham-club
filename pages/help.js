export default function Help() {
  return (
    <div className="relative z-10 w-full pb-10 pt-5 m-5 px-4 sm:px-8">
      <div className="mx-auto max-w-lg lg:max-w-xl space-y-6">
        <a href="/">← Back to homepage </a>
        <h1 className="text-2xl text-white">
          <u>Links and Resources:</u>
        </h1>
        <div className="text-white">
          <li>
            <a href="https://www.hamstudy.org" className="underline">
              Ham Study
            </a>{" "}
            - This is a highly recommended site that allows you to take practice
            tests and find short explanations for each question.{" "}
          </li>
          <li>
            <a
              href="https://hamradioacademy.com/resources/"
              className="underline"
            >
              Ham Radio Academy Reference
            </a>{" "}
            - This site has a long list of other resources and references.
          </li>
        </div>
        <h1 className="text-2xl text-white">
          <u>Youtube Guides:</u>
        </h1>
        <div className="text-white">
          <li>
            <a
              href="https://www.youtube.com/watch?v=bovJEGIunNg&list=PLuapIzKwhZN_30dcgsDbGU3J7C8BAYJcG"
              className="underline"
            >
              ARRL YouTube Course
            </a>{" "}
            - This is a nice video series covering everything you need to know,
            taught by the ARRL.
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=DdzQS10JnHU&list=PL1KAjn5rGhixvvb_jMZFWmbP97-t9Kyxk"
              className="underline"
            >
              Ham Radio Crash Course YouTube Series
            </a>{" "}
            - This is another nice video series covering ham radio.
          </li>
        </div>
        <h1 className="text-2xl text-white">
          <u>Misc:</u>
        </h1>
        <div className="text-white">
          <li>
            <a href="https://www.qrz.com/" className="underline">
              QRZ
            </a>{" "}
            - QRZ is a site that allows you to look up callsigns and find
            information about them. It is a great resource for finding out more
            about other operators.
          </li>
        </div>
        <h1 className="text-2xl text-white">
          <u>After you study:</u>
        </h1>
        <div className="text-white">
          <li>
            <a href="https://hamstudy.org/sessions" className="underline">
              Ham Study Exam Finder
            </a>{" "}
            - After completing your studying, you will use this site to find a
            local exam session.
          </li>
          <li>
              <a href="https://apps.fcc.gov/cores/userLogin.do?csfrToken=" className="underline">
                FCC FRN Registration
              </a>{" "}
              - Once you finish studying, you will need to get an FRN from the FCC in order to start the test in the first place.
              You will need to register with the FCC in order to do this!
          </li>
        </div>
      </div>
    </div>
  );
}
