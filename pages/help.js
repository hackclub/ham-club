export default function Help() {
  return (
    <div className="relative z-10 w-full pb-10 pt-5 m-5 px-4 sm:px-8">
      <div className="mx-auto max-w-lg lg:max-w-xl space-y-6">
        <a href="/">← Back to homepage </a>
        <h1 className="text-4xl">Study Stuff!</h1>
        <h1 className="text-2xl text-white">
          Links and Resources
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
          <li>
            <a href="https://www.kb6nu.com/study-guides/" className="underline">
              No-Nonsense Study Guides
            </a>{" "}
            - This is a resource from KB6NU which aims to make studying for the
            exam quick and easy.{" "}
          </li>
        </div>
        <h1 className="text-2xl text-white">
          Video Guides
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
          Misc
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
          After You Study
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
            <a
              href="https://apps.fcc.gov/cores/userLogin.do?csfrToken="
              className="underline"
            >
              FCC FRN Registration
            </a>{" "}
            - Once you finish studying, you will need to get an FRN from the FCC
            in order to start the test in the first place. You will need to
            register with the FCC in order to do this!
          </li>
          <li>
            <a
              href="https://www.arrl.org/youth-licensing-grant-program"
              className="underline"
            >
              ARRL Exam and FCC Reimbursement
            </a>{" "}
            - This is <b>needed for the program!</b> You will need to fill out
            this form to get your money back for the exam and the FCC
            registration. Note that Hack Club will not cover the reduced, $5
            exam fee.
          </li>
        </div>
        <h1 className="text-4xl">
          How to Take a Remote Exam for Amateur Radio Licensing
        </h1>
        <p>
          This step-by-step guide will help you prepare for and take a remote
          amateur radio licensing exam, including technology requirements,
          personal information considerations, and the process for exam day and
          beyond.
        </p>
        <h2>Preliminary Notes</h2>
        <li>
          <strong>Personal Information:</strong> Taking this exam involves
          sharing personal information. The Federal Communications Commission
          (FCC) requires your address and Social Security Number (SSN), and your
          call sign will be publicly associated with your address. Consider if
          you're comfortable with this, and whether your parents or guardians
          are okay with it. To protect your privacy, some people use a Post
          Office (PO) box, which has a monthly fee.
        </li>
        <li>
          <strong>Technology Requirements:</strong> You need a computer capable
          of running Zoom with screen-sharing capabilities. Some examiners
          require a second device to act as an additional camera. If you use
          Linux, check with the examiners to ensure compatibility.
        </li>
        <h2>Preparing for the Exam</h2>
        <li>
          <strong>Study:</strong> Prepare until you consistently score between
          80 and 85 on practice exams.
        </li>
        <li>
          <strong>Find a Remote Exam:</strong> Visit the{" "}
          <a className="underline" href="https://hamstudy.org/sessions/remote">
            Ham Study Exam Finder
          </a>{" "}
          to find a remote exam session that suits your schedule. Ensure the
          exam is conducted by ARRL-affiliated examiners.
        </li>
        <li>
          <strong>Get an FCC Registration Number (FRN):</strong> Follow the{" "}
          <a
            className="underline"
            href="https://www.fcc.gov/wireless/support/knowledge-base/universal-licensing-system-uls-resources/getting-fcc-registrationon"
          >
            guide
          </a>{" "}
          on the FCC website to obtain your FRN. Register as an individual and
          choose the non-restricted use option.
        </li>
        <li>
          <strong>Choose Your Exam Location:</strong> Select a place with
          minimal distractions. Bathrooms or closets often work well. Check with
          your examiners for specific requirements.
        </li>
        <h2>Registering for the Exam</h2>
        <li>
          <strong>Register and Pay:</strong> Sign up for your chosen exam
          session and pay the fee. If you're under 18, email your examiner to
          get the discounted $5 fee for minors.
        </li>
        <li>
          <strong>Prepare for Exam Day:</strong> Keep a photo ID handy, as
          you'll need it for identity verification. The examiners will email you
          a Zoom link or similar for the session.
        </li>
        <h2>Taking the Exam</h2>
        <li>
          <strong>Join the Exam Session:</strong> Use the Zoom link provided by
          your examiner and join from your designated exam location. Be prepared
          to wait while other candidates are tested.
        </li>
        <li>
          <strong>Follow Examiner Instructions:</strong> They will guide you
          through the setup and proctoring process.
        </li>
        <li>
          <strong>Complete the Exam:</strong> Once you start, focus on the
          questions and take your time. Your examiners will automatically grade
          your exam when you're finished.
        </li>
        <h2>After the Exam</h2>
        <li>
          <strong>Sign Forms and Get Your Certificate:</strong> If you pass, the
          examiners will guide you through electronically signing your forms.
          They will send you a Certificate of Successful Exam Completion via
          email. Keep this document for your records.
        </li>
        <li>
          <strong>FCC Registration Fee:</strong> After passing, the examiners
          will submit your paperwork to the FCC. You'll receive an email
          requesting payment of a $35 registration fee. Follow the instructions
          https://www.arrl.org/youth-licensing-grant-program to make the payment
          on a computer, not a phone or tablet.
        </li>
        <li>
          <strong>Reimbursement:</strong> Visit the{" "}
          <a
            className="underline"
            href="https://www.fcc.gov/wireless/support/knowledge-base/universal-licensing-system-uls-resources/getting-fcc-registrationon"
          >
            ARRL's Youth Grant Licensing Program page
          </a>{" "}
          to apply for reimbursement of the $35 registration fee. Fill out the
          Program Reimbursement Form and email it to{" "}
          <a href="mailto:VEC@arrl.org">VEC@arrl.org</a> with a polite request
          for reimbursement.
        </li>
        <li>
          <strong>Wait for Your Call Sign:</strong> It may take a few days to a
          few weeks for the FCC to grant your call sign. You'll receive an email
          notification, but some people have reported not receiving it. To check
          manually, search your FRN on the FCC application search to see if the
          status changes from "pending" to "granted." Once it's granted, follow
          the Authorization Link in the email to download your license.
        </li>
        <li>
          <strong>Receive Your Radio:</strong> After obtaining your call sign,{" "}
          <a
            className="underline"
            href="https://forms.hackclub.com/t/4xrbpF32B8us"
          >
            fill out the radio form
          </a>{" "}
          to receive your radio.
        </li>
        <h2>Congratulations!</h2>
        <p>
          You're now a licensed amateur radio operator! Enjoy your new radio and
          the adventures that await in the world of amateur radio.
        </p>
      </div>
    </div>
  );
}
