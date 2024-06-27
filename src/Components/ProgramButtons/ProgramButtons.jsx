import React from "react";

import { useNavigate } from "react-router-dom";

export default function ProgramButtons() {
  const history = useNavigate();
  return (
    <div className='program-page-learning-philosophy-apply-button'>
      <button
        onClick={() => history("/application-form")}
        className='apply-button'>
        Apply Now
      </button>
      <button className='download-button'>
        DOWNLOAD BROCHURE
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='18'
          height='19'
          viewBox='0 0 18 19'
          fill='none'>
          <path
            d='M8.93378 9.12785V15.4556M8.93378 15.4556L11.1671 13.2223M8.93378 15.4556L6.70045 13.2223M5.956 5.80465C6.51307 5.88432 7.02912 6.14299 7.42628 6.54165M13.0282 10.989C14.159 10.989 14.8893 10.0726 14.8893 8.94174C14.8893 8.49405 14.7425 8.05871 14.4714 7.7024C14.2004 7.34609 13.82 7.08846 13.3885 6.96897C13.3222 6.13404 12.9761 5.3459 12.4064 4.73198C11.8366 4.11806 11.0765 3.71423 10.2488 3.58578C9.42119 3.45734 8.57441 3.61179 7.8454 4.02416C7.11639 4.43653 6.54776 5.08272 6.23145 5.85825C5.56549 5.67365 4.85347 5.76116 4.25203 6.10153C3.65058 6.4419 3.20899 7.00725 3.02438 7.67321C2.83978 8.33917 2.92728 9.05119 3.26765 9.65263C3.60802 10.2541 4.17338 10.6957 4.83934 10.8803'
            stroke='#52525B'
            stroke-width='1.48889'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </svg>
      </button>
    </div>
  );
}
