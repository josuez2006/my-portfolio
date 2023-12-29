function Footer() {
  return (
    <footer className='footer'>
        <img src="assets/images/Footbar.svg" alt="" className="footer__img" />

        <div className="footer__content" id="contact">
            <h2 className="title">Let's design together!</h2>

            <div className="footer__icons">
                <button className="btn btn-with-icon">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M33.625 6H7.375C6.21506 6.00124 5.10298 6.46258 4.28278 7.28278C3.46258 8.10298 3.00124 9.21506 3 10.375V29.125C3.00124 30.2849 3.46258 31.397 4.28278 32.2172C5.10298 33.0374 6.21506 33.4988 7.375 33.5H33.625C34.7849 33.4988 35.897 33.0374 36.7172 32.2172C37.5374 31.397 37.9988 30.2849 38 29.125V10.375C37.9988 9.21506 37.5374 8.10298 36.7172 7.28278C35.897 6.46258 34.7849 6.00124 33.625 6ZM32.5172 13.2367L21.2672 21.9867C21.0478 22.1573 20.7779 22.2498 20.5 22.2498C20.2221 22.2498 19.9522 22.1573 19.7328 21.9867L8.48281 13.2367C8.35064 13.1369 8.23961 13.0118 8.1562 12.8687C8.07278 12.7256 8.01864 12.5674 7.99691 12.4032C7.97519 12.239 7.98631 12.0721 8.02964 11.9122C8.07296 11.7524 8.14763 11.6027 8.2493 11.4719C8.35096 11.3412 8.4776 11.2319 8.62186 11.1505C8.76611 11.0691 8.92511 11.0172 9.0896 10.9978C9.25409 10.9784 9.4208 10.9919 9.58004 11.0374C9.73928 11.083 9.88787 11.1598 10.0172 11.2633L20.5 19.4164L30.9828 11.2633C31.2449 11.0653 31.5744 10.9785 31.9001 11.0216C32.2257 11.0647 32.5213 11.2342 32.7229 11.4935C32.9245 11.7528 33.016 12.0811 32.9775 12.4073C32.939 12.7335 32.7736 13.0315 32.5172 13.2367Z" fill="#00A6FB"/></svg>
                    Email
                </button>
                <button className="btn btn-with-icon">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M34.7008 2.5H5.49062C3.89453 2.5 2.5 3.64844 2.5 5.22578V34.5008C2.5 36.0867 3.89453 37.5 5.49062 37.5H34.6922C36.2969 37.5 37.5 36.0773 37.5 34.5008V5.22578C37.5094 3.64844 36.2969 2.5 34.7008 2.5ZM13.3492 31.6742H8.33516V16.0844H13.3492V31.6742ZM11.0156 13.7141H10.9797C9.375 13.7141 8.33594 12.5195 8.33594 11.0242C8.33594 9.50156 9.40234 8.33516 11.043 8.33516C12.6836 8.33516 13.6875 9.49297 13.7234 11.0242C13.7227 12.5195 12.6836 13.7141 11.0156 13.7141ZM31.6742 31.6742H26.6602V23.15C26.6602 21.1078 25.9305 19.7125 24.1164 19.7125C22.7305 19.7125 21.9102 20.65 21.5453 21.5633C21.4086 21.8914 21.3719 22.3383 21.3719 22.7945V31.6742H16.3578V16.0844H21.3719V18.2539C22.1016 17.2148 23.2414 15.7195 25.8937 15.7195C29.1852 15.7195 31.675 17.8891 31.675 22.5664L31.6742 31.6742Z" fill="#051923"/></svg>
                    LinkedIn
                </button>
                <button className="btn btn-with-icon">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27.2914 5.41641C29.2236 5.42218 31.0751 6.19231 32.4414 7.55861C33.8077 8.92491 34.5778 10.7764 34.5836 12.7086V27.2914C34.5778 29.2236 33.8077 31.0751 32.4414 32.4414C31.0751 33.8077 29.2236 34.5778 27.2914 34.5836H12.7086C10.7764 34.5778 8.92491 33.8077 7.55861 32.4414C6.19231 31.0751 5.42218 29.2236 5.41641 27.2914V12.7086C5.42218 10.7764 6.19231 8.92491 7.55861 7.55861C8.92491 6.19231 10.7764 5.42218 12.7086 5.41641H27.2914ZM27.2914 2.5H12.7086C7.09375 2.5 2.5 7.09375 2.5 12.7086V27.2914C2.5 32.9062 7.09375 37.5 12.7086 37.5H27.2914C32.9062 37.5 37.5 32.9062 37.5 27.2914V12.7086C37.5 7.09375 32.9062 2.5 27.2914 2.5Z" fill="#051923"/><path d="M29.4789 12.709C29.0463 12.709 28.6233 12.5807 28.2636 12.3403C27.9039 12.1 27.6235 11.7583 27.4579 11.3586C27.2924 10.9589 27.249 10.5191 27.3334 10.0947C27.4178 9.67039 27.6262 9.28062 27.9321 8.97469C28.238 8.66876 28.6278 8.46042 29.0521 8.37602C29.4765 8.29161 29.9163 8.33493 30.316 8.5005C30.7157 8.66607 31.0574 8.94644 31.2977 9.30618C31.5381 9.66591 31.6664 10.0888 31.6664 10.5215C31.667 10.8089 31.6109 11.0937 31.5012 11.3593C31.3914 11.625 31.2303 11.8664 31.0271 12.0697C30.8238 12.2729 30.5824 12.434 30.3168 12.5437C30.0511 12.6534 29.7663 12.7096 29.4789 12.709ZM20 14.1668C21.1538 14.1668 22.2816 14.5089 23.241 15.1499C24.2003 15.7909 24.948 16.702 25.3895 17.768C25.8311 18.8339 25.9466 20.0069 25.7215 21.1385C25.4964 22.2701 24.9408 23.3095 24.125 24.1254C23.3091 24.9412 22.2697 25.4968 21.1381 25.7219C20.0065 25.947 18.8335 25.8315 17.7676 25.3899C16.7016 24.9484 15.7906 24.2007 15.1495 23.2414C14.5085 22.282 14.1664 21.1542 14.1664 20.0004C14.1681 18.4537 14.7832 16.9709 15.8769 15.8772C16.9705 14.7836 18.4533 14.1685 20 14.1668ZM20 11.2504C18.2694 11.2504 16.5777 11.7636 15.1388 12.725C13.6998 13.6865 12.5783 15.0531 11.9161 16.6519C11.2538 18.2508 11.0805 20.0101 11.4181 21.7074C11.7558 23.4048 12.5891 24.9639 13.8128 26.1876C15.0365 27.4113 16.5956 28.2446 18.293 28.5823C19.9903 28.9199 21.7496 28.7466 23.3485 28.0843C24.9473 27.4221 26.3139 26.3006 27.2754 24.8616C28.2368 23.4227 28.75 21.731 28.75 20.0004C28.75 17.6797 27.8281 15.4542 26.1872 13.8132C24.5462 12.1723 22.3206 11.2504 20 11.2504Z" fill="#051923"/></svg>
                    Instagram 
                </button>
            </div>
        </div>


    </footer>
  )
}

export default Footer