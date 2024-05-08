import Link from 'next/link';
import style from './privacyPolicySection.module.scss';
const {
    policyContent,
    heading,
    contentContainer,
    list,
    returnPolicyContainer
} = style;

const PrivacyPolicySection = () => {
    return(
        <section className={policyContent}>
            <h1 className={heading}>Policy</h1>
            <div className={contentContainer}>
                <p>At Graysa Collection, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website or make a purchase from us. By using our services, you agree to the collection and use of information as described in this policy.</p>
                <h3>Information We Collect</h3>
                <p>When you visit our website, we may collect certain information automatically, including your IP address, browser type, device type, and operating system. We may also collect information about your browsing behavior, such as the pages you view and the links you click.</p>
                <p>If you make a purchase, we will collect additional information necessary to process your order, including your name, shipping address, email address, and payment information.</p>
                <h3>How We Use Your Information</h3>
                <p>We use the information we collect to:</p>
                <div className={list}>
                    <p>Process and fulfill your orders</p>
                    <p>Communicate with you about your orders and account</p>
                    <p>Customize your shopping experience</p>
                    <p>Improve our website and services</p>
                    <p>Detect and prevent fraud</p>
                    <p>Comply with legal obligations</p>
                    <p>Data Security</p>
                </div>
                <p>We take the security of your personal information seriously and have implemented measures to protect it from unauthorized access, disclosure, alteration, and destruction. These measures include encryption, firewalls, and secure socket layer technology.</p>
                <h3>Sharing Your Information</h3>
                <p>We may share your personal information with third-party service providers who assist us in operating our website, conducting our business, or servicing you. These providers are contractually obligated to use your information only as necessary to provide the services they are providing to us.</p>
                <p>We may also share your information when required by law or to protect our rights, property, or safety, or the rights, property, or safety of others.</p>
                <h3>Your Choices</h3>
                <p>You have the right to access, update, or delete your personal information at any time. You can do this by logging into your account or contacting us directly. Please note that we may retain certain information as required by law or for legitimate business purposes.</p>
                <p>You can also opt out of receiving marketing communications from us by following the instructions provided in those communications or by contacting us directly.</p>
                
                <div className={returnPolicyContainer}>
                    <h3>Return Policy</h3>
                    <ul>
                        <li>At Graysa Collection, we want you to be completely satisfied with your purchase. If for some reason you are not entirely happy with your order, we are here to help. Please review our return policy below:</li>
                    </ul>                    
                    <h3>1. Eligibility:</h3>
                    <ul>
                        <li>To be eligible for a return, your item must be unused, unworn, and in the same condition that you received it. It must also be in the original packaging with all tags attached.</li>
                    </ul>
                    <h3>2. Timeframe:</h3>
                    <ul>
                        <li>We accept returns within 30 days of the purchase date. After 30 days, unfortunately, we cannot offer you a refund or exchange.</li>
                    </ul>
                    <h3>3. Exceptions:</h3>
                    <ul>
                        <li>Certain items are not eligible for return, such as:
                            <ul>
                                <li>Items marked as final sale or clearance.</li>
                                <li>Customized or personalized items.</li>
                            </ul>
                        </li>
                        <li>Please check the product description for any specific return exclusions.</li>
                    </ul>
                    <h3>4. Return Process:</h3>
                    <ul>
                        <li>
                            To initiate a return, please contact our customer service team at:
                            graysa.cs@gmail.com to request a return authorization (RA) number.
                        </li>
                        <li>Once you receive your RA number, securely package the item(s) along with the original packing slip or order confirmation.</li>
                        <li>Ship the package to the address provided by our customer service team. Please note that customers are responsible for return shipping costs unless the return is due to an error on our part.</li>
                    </ul>
                    <h3>5. Refunds:</h3>
                    <ul>
                        <li>Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.</li>
                        <li>If approved, your refund will be processed, and a credit will automatically be applied to your original method of payment within 10 working days. </li>
                    </ul>
                    <h3>7. Damaged or Defective Items:</h3>
                    <ul>
                        <li>If you receive a damaged or defective item, please contact our customer service team immediately to arrange for a replacement or refund. We may request photo evidence of the damage or defect for quality control purposes.</li>
                    </ul>
                    <h3>8. Gift Returns:</h3>
                    <ul>
                        <li>If you received an item as a gift and would like to return it, please contact our customer service team for assistance. We can issue a store credit or exchange for the gift recipient.</li>
                    </ul>
                </div>
                
                <h3>Updates to This Policy</h3>
                <p>We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website or by other means.</p>
                <h3>Contact Us</h3>
                <p>If you have any questions or concerns about this Privacy Policy or our privacy practices, please <Link href='/contact'>contact us</Link></p>
            </div>
            <p>Last Updated: [Date]</p>
        </section>
    );
};

export default PrivacyPolicySection;
