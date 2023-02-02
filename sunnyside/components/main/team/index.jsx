import Image from "next/image";
import React from "react";
import Styles from "./team.module.css";

function Team({francues}) {
  return (
    <>
      <div className={Styles.container}>
        <h4 className={francues.className}>Client testimonials</h4>
        <div className={Styles.team}>
          <div className={Styles.teamPerson}>
            <Image src="/image-emily.jpg" width={48} height={48} alt="123" />
            <p className={Styles.personTitle}>
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </p>
            <span className={`${Styles.personName} ${francues.className}`}> Emily R.</span>
            <span className={Styles.personJob}>Marketing Director</span>
          </div>
          <div className={Styles.teamPerson}>
            <Image src="/image-thomas.jpg" width={48} height={48} alt="123" />
            <p className={Styles.personTitle}>
              Sunnyside’s enthusiasm coupled with their keen interest in our
              brand’s success made it a satisfying and enjoyable experience.
            </p>
            <span className={`${Styles.personName} ${francues.className}`}>Thomas S.</span>
            <span className={Styles.personJob}>Chief Operating Officer</span>
          </div>
          <div className={Styles.teamPerson}>
            <Image src="/image-jennie.jpg" width={48} height={48} alt="123" />
            <p className={Styles.personTitle}>
              Incredible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!
            </p>
            <span className={`${Styles.personName} ${francues.className}`}>Jennie F.</span>
            <span className={Styles.personJob}>Business Owner</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
