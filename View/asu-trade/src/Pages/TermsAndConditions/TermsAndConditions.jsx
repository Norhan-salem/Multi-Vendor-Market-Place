import React from "react";
import '../TermsAndConditions/TermsAndConditions.css'
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
const TermsAndConditions = () => {

  return (
    <>
    <Navbar/>
    <div className="terms-and-conditions">
      <h1>ASU Trade Terms and Conditions</h1>
                    <details>
                        <summary>Acceptance</summary>
                        <p>
                          Welcome to ASU Trade, an e-commerce platform designed for students to buy or sell their 
                          old equipment and for vendors to offer new products. By using ASU Trade, you agree to these Terms.
                        </p>
                    </details>
                    <details>
                    <summary>Tax Obligations</summary>
                        <p>
                        Users are responsible for registering with the Egyptian Tax Authority when displaying taxable goods or services. 
                        The unified tax registration number must be disclosed in advertisements and account settings.
                        </p>
                    </details>
                    <details>
                    <summary>Terms of Use</summary>
                        <p>
                        These Terms may be updated at any time. Users are responsible for reviewing these Terms periodically.
                         If you object to any changes, discontinue use of ASU Trade immediately.
                        </p>
                    </details>
                    <details>
                    <summary>Language</summary>
                        <p>
                        These Terms are governed by the English version. Any translation is for convenience only.
                        </p>
                    </details>
                    <details>
                    <summary>Definitions</summary>
                        <p>
                          <ul>
                            <li><span>User:</span> Any individual who registers an account on ASU Trade.</li>
                            <li><span>Vendor:</span> Any business entity that offers products for sale on ASU Trade.</li>
                            <li><span>Product:</span> Any item listed for sale on ASU Trade.</li>
                          </ul>
                        </p>
                    </details>
                    <details>
                    <summary>User Obligations</summary>
                        <p>
                        Users agree to provide accurate information for registration and transactions,
                         and to use ASU Trade in a lawful and respectful manner.
                        </p>
                    </details>
                    <details>
                    <summary>Vendor Obligations</summary>
                        <p>
                        Vendors agree to provide accurate product descriptions and prices,
                         and to fulfill orders in a timely and professional manner.
                        </p>
                    </details>
                    <details>
                    <summary>Transactions</summary>
                        <p>
                        All transactions made through ASU Trade are binding. Users and vendors 
                        agree to complete transactions in good faith.
                        </p>
                    </details>
                    <details>
                    <summary>Disputes</summary>
                        <p>
                        Any disputes between users and vendors should be resolved amicably. 
                        ASU Trade reserves the right to mediate disputes and make binding decisions.
                        </p>
                    </details>
                    <details>
                    <summary>Liability</summary>
                        <p>
                        ASU Trade is not responsible for the quality or condition of products sold,
                         or for any harm or damages resulting from transactions.
                        </p>
                    </details>
                    <details>
                    <summary>Privacy</summary>
                        <p>
                        ASU Trade respects user privacy and will handle personal data in accordance with our Privacy Policy.
                        </p>
                    </details>
                    <details>
                    <summary>Change to Terms</summary>
                        <p>
                        ASU Trade reserves the right to modify these terms and conditions at any time. 
                        Users will be notified of any changes.
                        </p>
                    </details>
                    <details>
                    <summary>Governing Law</summary>
                        <p>
                        These terms and conditions are governed by the laws of the jurisdiction in which ASU Trade operates.
                        By using ASU Trade, you agree to abide by these terms and conditions.
                        </p>
                    </details>
    </div>
    <Footer/>
    </>
  );
};

export default TermsAndConditions;
