import React from 'react'
import "../PrivacyPage/PrivacyPage.css"

import FooterCTASection from "../../Components/footerCTASection/footerCTASection"



function RefundPolicy() {
    return (


        <div className="app-page-sections refundPage-section">

            <div className="app-page-sub-sections sub-refundPage-section">
                <h1> Refund Policy</h1>

                <div className='privacy-page-paras'>
                    <p>Your complete Course satisfaction is our No.1 Priority. However if due to some unforeseen situation you are not happy with the Training Session then the following terms apply for a mutually consented resolution of the situation.</p>
                </div>

                <div className='privacy-page-paras'>
                    <p>We are dedicated at Viven Eduversity to offer you the best quality in our courses and live projects Trainings. We know that mistakes are sometimes made though, and we are here to help remedy those problems.</p>
                </div>

                <div className='privacy-page-paras'>
                    <h3>Always email us first if you have a problem on <span style={{ fontWeight: 'bold' }}><a href="maito:admissions@viveneduversity.com">admissions@viveneduversity.com </a></span></h3>
                    <p>The refund of fees as applicable shall be made in due course. It is made clear that such application for Cancellation will be considered if and only if the admission is confirmed by paying the prescribed tuition Fee and other fees in full and by submitting the original documents. Refund shall be made after deduction Of cancellation charges as shown below:
                    </p>
                </div>

                <table className='refund-policy-table'>
                    <tr>
                        <th>Sr.No.</th>
                        <th>Situation</th>
                        <th>Refund</th>
                    </tr>
                    <tr>
                        <td>01</td>
                        <td>Cancellation Request Received before cut-off date and if a seat is filled in that program before the cut- off date</td>
                        <td>Entire Fee less Rs. 30,000/=</td>
                    </tr>
                    <tr>
                        <td>02</td>
                        <td>Cancellation Request received before cut-off date but ‘a seat’ could not be filled in that program before cut-off date</td>
                        <td>No Refund</td>
                    </tr>
                </table>


            </div>
            <FooterCTASection />

        </div>
    )
}

export default RefundPolicy