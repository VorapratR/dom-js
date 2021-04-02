// document.write(`
//     <div role="dialog" aria-live="polite" aria-label="cookieconsent" aria-describedby="cookieconsent:desc" class="cc-window cc-banner cc-type-info cc-theme-block cc-bottom cc-color-override-712034189 " style="">
//     <!--googleoff: all-->
//     <span id="cookieconsent:desc" class="cc-message">
//         บริษัท Test จำกัดใช้คุกกี้เพื่อให้ท่านได้รับประสบการณ์การใช้งานที่ดียิ่งขึ้น 
//         <a aria-label="learn more about cookies" role="button" tabindex="0" class="cc-link" 
//         href="https://nawaplastic.com/th/privacy-policy.php" rel="noopener noreferrer nofollow" target="_blank">
//             อ่านนโยบายการคุ้มครองข้อมูลส่วนบุคคล
//         </a>
//         และ
//         <a aria-label="learn more about cookies" role="button" tabindex="0" class="cc-link" 
//         href="https://nawaplastic.com/th/privacy-policy.php" rel="noopener noreferrer nofollow" target="_blank">
//             นโยบายคุกกี้
//         </a>
//     </span>
//     <div class="cc-compliance">
//         <a aria-label="dismiss cookie message" role="button" tabindex="0" class="cc-btn cc-dismiss" onclick="changeText(this)">
//             ปรับแต่ง
//         </a>
//         <a aria-label="dismiss cookie message" role="button" tabindex="0" class="cc-btn cc-dismiss">
//             ยอมรับ
//         </a>
//     </div>
// </div>
// `);
// let cookiePolicy = document.getElementById("cookiePolicy")
// cookiePolicy.href = "https://nawaplastic.com/th/privacy-policy.php"
// let privacyPolicy = document.getElementById("privacyPolicy")
// privacyPolicy.href = "https://nawaplastic.com/th/privacy-policy.php"

function changeText(id) {
    id.innerHTML = test;
}