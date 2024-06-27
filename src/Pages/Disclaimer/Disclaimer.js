import React from 'react'
import '../PrivacyPage/PrivacyPage.css'

import FooterCTASection from "../../Components/footerCTASection/footerCTASection"

function Disclaimer() {
    return (
        <div className='app-page-sections disclaimer-section'>

            <div className='app-page-sub-sections sub-disclaimer-section'>
                <h1> Disclaimer </h1>
                <div className='privacy-page-paras'>
                    <p>The information, statistics and data contained herein is produced, processed, compiled and based on various sources from public domain believed to be reliable to the best of our knowledge. These details are neither all-inclusive nor guaranteed and are subject to applicable changes without notice. These details have been disseminated for reference purpose only and <a href="https://viveneduversity.com/ " style={{ fontWeight: 'bold' }}>www.viveneduversity.com</a> makes no warranties or representations whatsoever regarding the quality, content, suitability, completeness, adequacy, accuracy or timeliness of such information and data. Readers are further advised to procure information from the official websites of the respective Corporate Companies etc. <a href="https://viveneduversity.com/ " style={{ fontWeight: 'bold' }}>www.viveneduversity.com</a> expressly disclaims all and any liability and responsibility to anyone who has read /referred this, or otherwise, in respect of the consequences of anything done or omitted to be done by any such person/entity in reliance upon the content of this website. Your decision to use any information contained herein will be your decision alone, based solely on your own evaluation and assessment. Students/ users / Readers are further advised to review and crosscheck the details before arriving to any decision. www.viveneduversity.com  shall not be held liable for any material or non material damage caused by omissions, incorrect or incomplete information. We may not be necessarily affiliated in any manner to the Corporate Companies. mentioned herein. It is also clarified that the Corporate Companies etc mentioned herein have not contributed to the preparation of this web content. Every effort is made to keep the website up and running smoothly. However, <a href="https://viveneduversity.com/ " style={{ fontWeight: 'bold' }}>www.viveneduversity.com</a> takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.
                    </p>
                </div>

            </div>
            <FooterCTASection />


        </div>
    )
}

export default Disclaimer