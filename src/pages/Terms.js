import { Link } from "react-router-dom";
import logo from "../assets/image/svg/logo.svg";
import { useEffect } from "react";

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="terms">
      <div className="terms__logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>

      <div className="terms__main">
        <div className="terms__main__left">
          <div class="_link_58asr_34">
            <div class="__11Purpose_58asr_42">1.1 Purpose</div>
          </div>
          <div class="_link2_58asr_57">
            <div class="__12Agreement_58asr_65">1.2 Agreement</div>
          </div>
          <div class="_link3_58asr_80">
            <div class="__22YourAccess_58asr_88">2.2 Your Access</div>
          </div>
          <div class="_link4_58asr_103">
            <div class="__23AlertsNotificationsAndServic_58asr_111">
              <div class="_textBlock_58asr_120">
                2.3 Alerts, Notifications and Service
              </div>
              <div class="_textBlock2_58asr_128">Communications</div>
            </div>
          </div>
          <div class="_link5_58asr_137">
            <div class="__31InformationProvidedToUserNot_58asr_145">
              <div class="_textBlock3_58asr_154">
                3.1 Information Provided to User Not
              </div>
              <div class="_textBlock4_58asr_162">Guaranteed</div>
            </div>
          </div>
          <div class="_link6_58asr_171">
            <div class="__32DisclaimerWarranties_58asr_179">
              3.2 Disclaimer Warranties
            </div>
          </div>
          <div class="_link7_58asr_194">
            <div class="__33LimitationOfLiability_58asr_202">
              3.3 Limitation of Liability
            </div>
          </div>
          <div class="_link8_58asr_217">
            <div class="__41Dos_58asr_225">4.1 Dos</div>
          </div>
          <div class="_link9_58asr_240">
            <div class="__42DontS_58asr_248">4.2 Dont's</div>
          </div>
          <div class="_link10_58asr_263">
            <div class="__51IntegrationSeverability_58asr_271">
              5.1 Integration &amp; Severability
            </div>
          </div>
          <div class="_link11_58asr_286">
            <div class="__52AdviceMayDiffer_58asr_294">
              5.2 Advice may differ
            </div>
          </div>
          <div class="_link12_58asr_309">
            <div class="__53PortfolioAggregation_58asr_317">
              5.3 Portfolio Aggregation
            </div>
          </div>
          <div class="_link13_58asr_332">
            <div class="__54Communication_58asr_340">5.4 Communication</div>
          </div>
          <div class="_link14_58asr_355">
            <div class="__55Feedback_58asr_363">5.5 Feedback</div>
          </div>
          <div class="_link15_58asr_378">
            <div class="__56Questions_58asr_386">5.6 Questions</div>
          </div>
        </div>

        <div className="terms__main__right">
          <h2>Zitch’s Term of Use</h2>
          <p>
            Welcome to the Zitch Mobile App (the “App”). The App is operated by
            Zitch Digital Concept Limited and these terms and conditions of use
            contains the complete terms that Apply to your use of the App.
          </p>
          <h2>1. Definitions</h2>
          <p>
            “Business” means a person or entity who successfully subscribes to
            use the APP. The term Business shall include the said Business’s
            personal representatives, successors in title and assigns as well as
            persons acting with the Business’s authority such as servants or
            employees.
            <br />
            <br />
            “Cash” means the lawful currency of the Federal Republic of Nigeria.
            “Charges” means the charges for the use of the APP as may be
            prescribed and published by Zitch Digital Concept Limited, from time
            to time. “Contract” means the terms and conditions contained herein
            and as may be amended in writing, from time to time by Zitch.
            <br />
            <br />
            “Zitch”, “we”, “us”, “our”, means Zitch Digital Concept Limited and
            where applicable, its employees, officers, and authorized Business.
            <br />
            <br />
            “Zitch Wallet” means a digital account on the APP that, when funded,
            allows an Business to make electronic transactions on behalf of
            members of the public. “PIN” means your personal identification
            number is the password you choose to access and operate your Zitch
            Wallet and includes the one-time 4-digit PIN sent to you on
            registration for the purpose of activating your Zitch
            Wallet.“Recipient” means a member of the public or corporate entity
            to whom a fund transfer has been initiated through the App
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
