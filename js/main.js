var data = data.CommsTask;
const discountPricing = 0.6;
// console.log(data);
let prices = {
  range6: 640000, //6 C2
  range5: 560000, //5 C1
  range4: 80000, //4 B2
  range3: 50000, //3 B1
  range2: 25000, //2 A2
  range1: 0, //1
};
const discountedPrices = {};
for (const key in prices) {
  if (prices.hasOwnProperty(key)) {
    prices[key] = prices[key] -  prices[key] * 0.6;
  }
}

let idComm = [];
let idCommOverlap = [];
let arrayIDCommTaskUsed;
let arrayCommTaskStandardUsed;
let idSet;
let arrIDSkillCommUsed;

let arrSkillCommClicked = [];
let commTaskSubSkill;

let dataNotOverlap = [];
let dataOverlap = [];

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
// Input tung CommTask
const skillsCountTypeCommTask = (CommTask) => {
  const sumSkill = { sum: 0 };
  const countTypeSkillsRange = {
    range_1: 0,
    range_2: 0,
    range_3: 0,
    range_4: 0,
    range_5: 0,
    range_6: 0,
    range_se: 0,
  };
  const countTypeSkillsStandard = {
    range_1: 0,
    range_2: 0,
    range_3: 0,
    range_4: 0,
    range_5: 0,
  };
  const countTypeSkills = {
    count_A1_l: 0,
    count_A1_r: 0,
    count_A1_s: 0,
    count_A1_str: 0,
    count_A1_w: 0,

    count_A2_l: 0,
    count_A2_r: 0,
    count_A2_s: 0,
    count_A2_str: 0,
    count_A2_lq: 0,
    count_A2_w: 0,

    count_B1_l: 0,
    count_B1_r: 0,
    count_B1_s: 0,
    count_B1_str: 0,
    count_B1_lq: 0,
    count_B1_w: 0,

    count_B2_l: 0,
    count_B2_r: 0,
    count_B2_s: 0,
    count_B2_str: 0,
    count_B2_lq: 0,
    count_B2_w: 0,

    count_C1_l: 0,
    count_C1_r: 0,
    count_C1_s: 0,
    count_C1_str: 0,
    count_C1_lq: 0,
    count_C1_w: 0,

    count_C2_l: 0,
    count_C2_r: 0,
    count_C2_s: 0,
    count_C2_str: 0,
    count_C2_lq: 0,
    count_C2_w: 0,

    count_se: 0,

    count_P_range3: 0,
    count_P_range4: 0,
    count_P_range5: 0,
    count_P_range: 0,
  };
  console.log(CommTask)
  CommTask.Skills.forEach(function (skill) {
    if (skill.cefrlevel === "A1") {
      if (skill.skillType === "listening") {
        countTypeSkills.count_A1_l += 1;
      }
      if (skill.skillType === "reading") {
        countTypeSkills.count_A1_r += 1;
      }
      if (skill.skillType === "speaking") {
        countTypeSkills.count_A1_s += 1;
      }
      if (skill.skillType === "strategy") {
        countTypeSkills.count_A1_str += 1;
      }
      if (skill.skillType === "writing") {
        countTypeSkills.count_A1_w += 1;
      }
    }
    //A2
    if (skill.cefrlevel === "A2") {
      if (skill.skillType === "listening") {
        countTypeSkills.count_A2_l += 1;
      }
      if (skill.skillType === "reading") {
        countTypeSkills.count_A2_r += 1;
      }
      if (skill.skillType === "speaking") {
        countTypeSkills.count_A2_s += 1;
      }
      if (skill.skillType === "strategy") {
        countTypeSkills.count_A2_str += 1;
      }
      if (skill.skillType === "language quality") {
        countTypeSkills.count_A2_lq += 1;
      }
      if (skill.skillType === "writing") {
        countTypeSkills.count_A2_w += 1;
      }
    }
    //B1
    if (skill.cefrlevel === "B1") {
      if (skill.skillType === "listening") {
        countTypeSkills.count_B1_l += 1;
      }
      if (skill.skillType === "reading") {
        countTypeSkills.count_B1_r += 1;
      }
      if (skill.skillType === "speaking") {
        countTypeSkills.count_B1_s += 1;
      }
      if (skill.skillType === "strategy") {
        countTypeSkills.count_B1_str += 1;
      }
      if (skill.skillType === "language quality") {
        countTypeSkills.count_B1_lq += 1;
      }
      if (skill.skillType === "writing") {
        countTypeSkills.count_B1_w += 1;
      }
    }
    //B2
    if (skill.cefrlevel === "B2") {
      if (skill.skillType === "listening") {
        countTypeSkills.count_B2_l += 1;
      }
      if (skill.skillType === "reading") {
        countTypeSkills.count_B2_r += 1;
      }
      if (skill.skillType === "speaking") {
        countTypeSkills.count_B2_s += 1;
      }
      if (skill.skillType === "strategy") {
        countTypeSkills.count_B2_str += 1;
      }
      if (skill.skillType === "language quality") {
        countTypeSkills.count_B2_lq += 1;
      }
      if (skill.skillType === "writing") {
        countTypeSkills.count_B2_w += 1;
      }
    }
    //C1
    if (skill.cefrlevel === "C1") {
      if (skill.skillType === "listening") {
        countTypeSkills.count_C1_l += 1;
      }
      if (skill.skillType === "reading") {
        countTypeSkills.count_C1_r += 1;
      }
      if (skill.skillType === "speaking") {
        countTypeSkills.count_C1_s += 1;
      }
      if (skill.skillType === "strategy") {
        countTypeSkills.count_C1_str += 1;
      }
      if (skill.skillType === "language quality") {
        countTypeSkills.count_C1_lq += 1;
      }
      if (skill.skillType === "writing") {
        countTypeSkills.count_C1_w += 1;
      }
    }
    //C2
    if (skill.cefrlevel === "C2") {
      if (skill.skillType === "listening") {
        countTypeSkills.count_C2_l += 1;
      }
      if (skill.skillType === "reading") {
        countTypeSkills.count_C2_r += 1;
      }
      if (skill.skillType === "speaking") {
        countTypeSkills.count_C2_s += 1;
      }
      if (skill.skillType === "strategy") {
        countTypeSkills.count_C2_str += 1;
      }
      if (skill.skillType === "language quality") {
        countTypeSkills.count_C2_lq += 1;
      }
      if (skill.skillType === "writing") {
        countTypeSkills.count_C2_w += 1;
      }
    }
    //se
    if (skill.skilltypesID === "se") {
      countTypeSkills.count_se += 1;
    }
    //P
    if (skill.skilltypesID === "psychomotor") {
      if (
        skill.id === "P-L-5" ||
        skill.id === "P-L-6" ||
        skill.id === "P-L-8" ||
        skill.id === "P-L-13"
      ) {
        countTypeSkills.count_P_range3 += 1;
      }
      if (
        skill.id === "P-L-1" ||
        skill.id === "P-L-2" ||
        skill.id === "P-L-3" ||
        skill.id === "P-L-4" ||
        skill.id === "P-L-7" ||
        skill.id === "P-L-12" ||
        skill.id === "P-L-14"
      ) {
        countTypeSkills.count_P_range4 += 1;
        // console.log(skill);
      }
      if (
        skill.id === "P-L-9" ||
        skill.id === "P-L-10" ||
        skill.id === "P-L-11"
      ) {
        countTypeSkills.count_P_range5 += 1;
      }
    }
  });
  // Tong ky nang psychomotor
  countTypeSkills.rangeP =
    countTypeSkills.count_P_range3 +
    countTypeSkills.count_P_range4 +
    countTypeSkills.count_P_range5;

  // countTypeSkills la tong theo tunug loai skill co bao nhieu ky nang

  // tinh theo range - Full Range
  countTypeSkillsRange.range_1 =
    countTypeSkills.count_A1_l +
    countTypeSkills.count_A1_r +
    countTypeSkills.count_A1_s +
    countTypeSkills.count_A1_str +
    countTypeSkills.count_A1_w;

  countTypeSkillsRange.range_2 =
    countTypeSkills.count_A2_l +
    countTypeSkills.count_A2_r +
    countTypeSkills.count_A2_s +
    countTypeSkills.count_A2_str +
    countTypeSkills.count_A2_lq +
    countTypeSkills.count_A2_w;

  countTypeSkillsRange.range_3 =
    countTypeSkills.count_B1_l +
    countTypeSkills.count_B1_r +
    countTypeSkills.count_B1_s +
    countTypeSkills.count_B1_str +
    countTypeSkills.count_B1_lq +
    countTypeSkills.count_B1_w +
    countTypeSkills.count_P_range3;

  countTypeSkillsRange.range_4 =
    countTypeSkills.count_B2_l +
    countTypeSkills.count_B2_r +
    countTypeSkills.count_B2_s +
    countTypeSkills.count_B2_str +
    countTypeSkills.count_B2_lq +
    countTypeSkills.count_B2_w +
    countTypeSkills.count_P_range4;

  countTypeSkillsRange.range_5 =
    countTypeSkills.count_C1_l +
    countTypeSkills.count_C1_r +
    countTypeSkills.count_C1_s +
    countTypeSkills.count_C1_str +
    countTypeSkills.count_C1_lq +
    countTypeSkills.count_C1_w +
    countTypeSkills.count_P_range5;

  countTypeSkillsRange.range_6 =
    countTypeSkills.count_C2_l +
    countTypeSkills.count_C2_r +
    countTypeSkills.count_C2_s +
    countTypeSkills.count_C2_str +
    countTypeSkills.count_C2_lq +
    countTypeSkills.count_C2_w;

  //Standard
  countTypeSkillsStandard.range_1 =
    countTypeSkills.count_A1_l +
    countTypeSkills.count_A1_r +
    countTypeSkills.count_A1_s +
    countTypeSkills.count_A1_str +
    countTypeSkills.count_A1_w;

  countTypeSkillsStandard.range_2 =
    countTypeSkills.count_A2_l +
    countTypeSkills.count_A2_r +
    countTypeSkills.count_A2_s +
    countTypeSkills.count_A2_str +
    countTypeSkills.count_A2_lq +
    countTypeSkills.count_A2_w;

  countTypeSkillsStandard.range_3 =
    countTypeSkills.count_B1_l +
    countTypeSkills.count_B1_r +
    countTypeSkills.count_B1_s +
    countTypeSkills.count_B1_str +
    countTypeSkills.count_B1_lq +
    countTypeSkills.count_B1_w +
    countTypeSkills.count_P_range3;

  countTypeSkillsStandard.range_4 =
    countTypeSkills.count_B2_l +
    countTypeSkills.count_B2_r +
    countTypeSkills.count_B2_s +
    countTypeSkills.count_B2_str +
    countTypeSkills.count_B2_lq +
    countTypeSkills.count_B2_w +
    countTypeSkills.count_P_range4;

  countTypeSkillsStandard.range_5 = countTypeSkills.count_P_range5;

  //sum
  sumSkill.sum =
    countTypeSkillsRange.range_1 +
    countTypeSkillsRange.range_2 +
    countTypeSkillsRange.range_3 +
    countTypeSkillsRange.range_4 +
    countTypeSkillsRange.range_5 +
    countTypeSkillsRange.range_6 +
    countTypeSkills.count_se;
  return { countTypeSkills, countTypeSkillsRange, countTypeSkillsStandard };
};

// dau vao la data => forEach ra tung CommTask
const insertCountSkill = (data) => {
  data.forEach(function (commTask) {
    const { countTypeSkills, countTypeSkillsRange, countTypeSkillsStandard } =
      skillsCountTypeCommTask(commTask);
    commTask.countTypeSkills = countTypeSkills; //A1(L, R, S, STR, LQ, W)
    commTask.countTypeSkillsRange = countTypeSkillsRange; //range to C2
    commTask.countTypeSkillsStandard = countTypeSkillsStandard; // range To B2
  });
};
insertCountSkill(data);

// ham tinh tien, tinh tren tung CommTask - FullRange
function calculateCostFullRange(commTask, prices) {
  let costFullRange =
    commTask.countTypeSkillsRange.range_1 * prices.range1 +
    commTask.countTypeSkillsRange.range_2 * prices.range2 +
    commTask.countTypeSkillsRange.range_3 * prices.range3 +
    commTask.countTypeSkillsRange.range_4 * prices.range4 +
    commTask.countTypeSkillsRange.range_5 * prices.range5 +
    commTask.countTypeSkillsRange.range_6 * prices.range6;

  commTask.Skills.forEach(function (skills) {
    if (skills._id.$oid === "65ef253b465cd988729bf257") {
      console.log('true', commTask)
      costFullRange -= prices.range4;
    }
  });
  costFullRange = costFullRange
  return { costFullRange };
}
// dau vao la data => forEach ra tung CommTask
const insertCalculateCostFullRange = (data, prices) => {
  data.forEach(function (commTask) {
    const { costFullRange } = calculateCostFullRange(commTask, prices);
    commTask.costFullRange = costFullRange;
  });
};
insertCalculateCostFullRange(data, prices);

function calculateCostStandard(commTask, prices) {
  let costStandard =
    commTask.countTypeSkillsStandard.range_1 * prices.range1 +
    commTask.countTypeSkillsStandard.range_2 * prices.range2 +
    commTask.countTypeSkillsStandard.range_3 * prices.range3 +
    commTask.countTypeSkillsStandard.range_4 * prices.range4 +
    commTask.countTypeSkillsStandard.range_5 * prices.range5;

    commTask.Skills.forEach(function (skills) {
      if (skills._id.$oid === "65ef253b465cd988729bf257") {
        console.log('true', commTask)
        costStandard -= prices.range4;
      }
    });
    costStandard = costStandard
  return { costStandard };
}
// dau vao la data => forEach ra tung CommTask
const insertCalculateCostStandard = (data, prices) => {
  data.forEach(function (commTask) {
    const { costStandard } = calculateCostStandard(commTask, prices);
    commTask.costStandard = costStandard;
  });
};
insertCalculateCostStandard(data, prices);
// console.log(data)
// Đặt nội dung cho phần tử mới
var commTasksEl = document.getElementById("comm_tasks");
// var commTasksElv2 = document.getElementById("items");

const emptyCommTask = () => {
  commTasksEl.innerHTML = "";
};
// const emptyCommTaskv2 = () => {
//   commTasksElv2.innerHTML = "";
// };
const loadCommTasks = (data) => {
  emptyCommTask();

  data.forEach(function (commTask) {
    idComm.push(commTask._id.$oid); // push id của commTask để làm id cho div 1 task
    // console.log(idComm, 'idcomm')
    // console.log(e)
    var newCommTask = `<div class="detailCommTask">
    <div class="detailCommTaskBlock1">
      <div id="${commTask._id.$oid}" class="desc-comp-offer">
        <div class="row desc-comp-offer-cont-pro">
          <div class="col-md-5 col-sm-12 flex">
            <img
              style="height: 100px"
              src="./img/LogoSet/Vertical/4@25x.png"
              class="img-fluid img-center-block align-items-center"
              alt="..."
            />
          </div>
          <div style="padding: 20px 0;" class="col-md-7 col-sm-12">
            <h3 style="padding:0" class="name-CommTask"><b>${
              commTask.name
            }</b></h3>
            <div class="detailComm">
              <p class="detailCommEN">${commTask.desc_en}</p>
              <p class="descCommVN">${commTask.desc_vi}</p>
            </div>

            <div class="priceComm flex">
            <p>Total:
            ${commTask.Skills.length} skills
            </p>
              <p>Standard:
              ${commTask.costStandard
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} đ
              </p>

              <p>Full Range:
              ${commTask.costFullRange
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} đ
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="detailCommTaskBlock2">

    </div>
    <div class="detailCommTaskBlock3">
      
    </div>
  </div>`;

    // Thêm phần tử mới vào container
    commTasksEl.innerHTML += newCommTask;
  });
};
// loadCommTasks(data);
const loadCommTasks_v2 = (data) => {
  emptyCommTask();
  var itemsDivEl = commTasksEl.appendChild(document.createElement("div"));
  itemsDivEl.id = "items";

  data.forEach(function (commTask) {
    idComm.push(commTask._id.$oid); // push id của commTask để làm id cho div 1 task
    // console.log(idComm, 'idcomm')
    // console.log(e)
    var newCommTask = `<div id ='${
      commTask._id.$oid
    }' class="item animate__animated animate__fadeIn" >
    <div class= "itemCommTask">
      <div class="nameComm">
        <p>${commTask.name}</p>
      </div>
      <div style="" class="descCommTask">
        <div class="descDetail">
          <p class="descCommTaskEN">
          ${commTask.desc_en}
          </p>
          <p class="descCommTaskVN">
          ${commTask.desc_vi}
          </p>
        </div>
        <div class="descDetailBelow">
          <div class="descBlock ">
            <div class="totalSkill">
              <p class="descNameTotal">Total</p>
              <div class="descTotalSkill">${commTask.Skills.length} skills</div>
            </div>

            <div class="price">
              <div class="priceStandard">
                <p class="descNameStandard">Standard</p>
                <div class="descStandardSkill">
                ${commTask.costStandard
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} đ
                </div>
              </div>

              <div class="priceFullRange">
                <p class="descNameFullRange">Full Range</p>
                <div class="descFullRangeSkill">
                ${commTask.costFullRange
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} đ
                </div>
              </div>
            </div>
          </div>

          <button onclick="scrollToTop()" class="btnDetail">Mô tả</button>
        </div>
      </div>
    </div>

  </div>`;

    // Thêm phần tử mới vào container
    itemsDivEl.innerHTML += newCommTask;
  });
};
loadCommTasks_v2(data);

const insertBtnBack = () => {
  const detailCommTask = document.querySelector(".detailCommTask");
  const detailBtnBack = document.createElement("div");
  detailBtnBack.classList.add("btnBankBlock");
  detailCommTask.appendChild(detailBtnBack);
  var detailBtnBackClicked = `
    <input
    style="height: 100%;"
    type="button"
    onclick="scrollToTop()" 
    class="btn_back btn_submit text-white px-4 py-2 rounded-md sm:ml-auto w-auto"
    title = "Back to list communication task"
    value="Trở về"
  />
 `;
  detailBtnBack.innerHTML = detailBtnBackClicked;
  const btnBackElement = document.querySelector(".btn_back");
  if (btnBackElement) {
    btnBackElement.addEventListener("click", () => {
      idComm = [];
      emptyCommTask();
      if (dataNotOverlap.length > 0) {
        loadCommTasks_v2(dataNotOverlap);
      } else {
        loadCommTasks_v2(data);
      }

      idCommAfterSubmit = [];

      for (let i = 0; i < idComm.length; i++) {
        addCommTaskListener(idComm[i], data, dataOverlap, dataNotOverlap);
      }
    });
  }
};
const loadDetailCommTaskBlock1 = (commTaskClicked) => {
  [commTaskClicked] = commTaskClicked;

  const detailCommTask = document.querySelector(".detailCommTask");
  const detailCommTaskBlock1 = document.createElement("div");
  detailCommTaskBlock1.classList.add("detailCommTaskBlock1");
  detailCommTask.appendChild(detailCommTaskBlock1);
  var detailCommTaskBlock1Clicked = `
    <div id="${commTaskClicked._id.$oid}" class="desc-comp-offer">
      <div class="row desc-comp-offer-cont-pro">
        <div class="col-md-5 col-sm-12 flex">
          <img
            style="height: 200px; padding-top: 0px"
            src="./img/LogoSet/Vertical/4@25x.png"
            class="img-fluid img-center-block align-items-center"
            alt="..."
          />
        </div>
        <div style="padding-bottom: 20px;" class="col-md-7 col-sm-12">
          <h3 style="padding-left: 10px" class="name-CommTask"><b>${
            commTaskClicked.name
          }</b></h3>
          <div class="detailComm">
            <p class="detailCommEN">${commTaskClicked.desc_en}</p>
            <p class="descCommVN">${commTaskClicked.desc_vi}</p>
          </div>
          <div class="descCommTotalBlock">
            <p class="descCommTotal">Total: ${
              commTaskClicked.Skills.length
            } skills</p>
          </div>
          <div style="padding-left: 10px">
            <table class="descCommTable">
              <tr >
                <td><p style ="font-weight: bold">Gói dịch vụ</p></td>
                <td><p style ="font-weight: bold">Giá</p></td>
                <td><p style ="font-weight: bold">Mã</p></td>

              </tr>
              <tr>
                <td><p>Standard</p></td>
                <td>
                <p  style="text-align: end;">${commTaskClicked.costStandard
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} đ
                  </p>
                </td>
                <td style="text-align: center;"><p>S${commTaskClicked.id}</p></td>
                
              </tr>
              <tr>
              <td><p>Full Range</p></td>
              <td>
                <p  style="text-align: end;">${commTaskClicked.costFullRange
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} đ
                </p>
              </td>
                <td  style="text-align: center;"><p>F${commTaskClicked.id}</p></td>
              </tr>

            </table>
          </div>

        </div>
      </div>
    </div>
  `;

  detailCommTaskBlock1.innerHTML = detailCommTaskBlock1Clicked;
};
const loadDetailCommTaskBlock2 = (commTaskClicked) => {
  const [commTask] = commTaskClicked;

  const detailCommTask = document.querySelector(".detailCommTask");
  const detailCommTaskBlock2 = document.createElement("div");
  detailCommTaskBlock2.classList.add("detailCommTaskBlock2_sumSkillCommTask");
  detailCommTask.appendChild(detailCommTaskBlock2);

  var detailCommTaskBlock2Clicked = `
  <div class="${commTask._id.$oid} desc-comp-offer">
    <div class="row desc-comp-offer-cont-pro">

      <div>
        <div>
          <h3>Chi tiết ${commTask.name} | In detail, ${commTask.name} </h3>
        </div>
        <div class="tableDetail">

          <div class="cefrBlock">

            <div class="a1_a2_level" >
              <table  style="font-family: 'Calibri', sans-serif;border-collapse: collapse;text-align: center; font-size: 16px;">
                <!-- A1 -->
                <tbody style="background-color: #ffd0d3;color: #FF0000; border-collapse: collapse; border: 1px solid #fff; padding: 2px;" >
                  <tr style="background-color: #ffd0d3;color: #FF0000;">
                    <td style=" background-color: #FF0000; color: #fff; font-weight: bold;padding: 2px 16px;" rowspan="6">A1</td>
          
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left">Listening</td>
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${
                      commTask.countTypeSkills.count_A1_l
                    }</td>
        
                  </tr>
                  
                  <tr>
                    <!-- R-C2-2 đến R-C2-7 -->
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left">Reading</td>
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${
                      commTask.countTypeSkills.count_A1_r
                    }</td>
        
                  </tr>
                  <tr>
                    <!-- S-C2-8 đến S-C2-10 -->
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Speaking</td>
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${
                      commTask.countTypeSkills.count_A1_s
                    }</td>
        
                  </tr>
                  <tr>
                    <!-- STR-C2-11 -->
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Strategy</td>
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${
                      commTask.countTypeSkills.count_A1_str
                    }</td>
        
                  </tr >
                  <tr>
                    <!-- W-C2-16 đến W-C2-23 -->
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Language quality</td>
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">0</td>
        
                  </tr>
                  <tr>
                    <!-- W-C2-16 đến W-C2-23 -->
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Writing</td>
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${
                      commTask.countTypeSkills.count_A1_w
                    }</td>
        
                  </tr>
        
                </tbody>
              </table>
              <table  style="font-family: 'Calibri', sans-serif;border-collapse: collapse;text-align: center; font-size: 16px;">
              <!-- A2 -->
              <tbody style="background-color: #fbe4d5;color: #ed7d31; border-collapse: collapse; border: 1px solid #fff; padding: 2px" >
                <tr style="background-color: #fbe4d5;color: #ed7d31;">
                  <td style=" background-color: #FF9900; color: #000; font-weight: bold;padding: 2px 16px;" rowspan="6">A2</td>
        
                  <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left">Listening</td>
                  <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${
                    commTask.countTypeSkills.count_A2_l
                  }</td>

                </tr>
                
                <tr>
                  <!-- R-C2-2 đến R-C2-7 -->
                  <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left">Reading</td>
                  <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${
                    commTask.countTypeSkills.count_A2_r
                  }</td>

                </tr>
                <tr>
                  <!-- S-C2-8 đến S-C2-10 -->
                  <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Speaking</td>
                  <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${
                    commTask.countTypeSkills.count_A2_s
                  }</td>

                </tr>
                <tr>
                  <!-- STR-C2-11 -->
                  <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Strategy</td>
                  <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${
                    commTask.countTypeSkills.count_A2_str
                  }</td>

                </tr >
                <tr>
                  <!-- LQ-C2-12 đến LQ-C2-15 -->
                  <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Language quality</td>
                  <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${
                    commTask.countTypeSkills.count_A2_lq
                  }</td>

                </tr >
                <tr>
                  <!-- W-C2-16 đến W-C2-23 -->
                  <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Writing</td>
                  <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${
                    commTask.countTypeSkills.count_A2_w
                  }</td>

                </tr>
              </tbody>
              </table>
            </div>
            <div class="b1_b2_level">
              <table  style="font-family: 'Calibri', sans-serif;border-collapse: collapse;text-align: center; font-size: 16px;">
                  <tbody style="background-color: #fef2cb;color: #bf9000; border-collapse: collapse; border: 1px solid #fff; padding: 2px" >
                    <tr style="background-color: #fef2cb;color: #bf9000;">
                      <td style=" background-color: #FFFF00; color: #000; font-weight: bold;padding: 2px 16px;" rowspan="6">B1</td>
                      
                      <!-- L-B1-1 đến L-B1-6 -->
                      <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left">Listening</td>
                      <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${
                        commTask.countTypeSkills.count_B1_l
                      }</td>
        
                    </tr>
                    
                    <tr>
                      
                      <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left">Reading</td>
                      <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${
                        commTask.countTypeSkills.count_B1_r
                      }</td>
        
                    </tr>
                    <tr>
                      
                      <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Speaking</td>
                      <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${
                        commTask.countTypeSkills.count_B1_s
                      }</td>
        
                    </tr>
                    <tr>
                      <!-- STR-C2-11 -->
                      <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Strategy</td>
                      <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${
                        commTask.countTypeSkills.count_B1_str
                      }</td>
        
                    </tr >
                    <tr>
                      
                      <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Language quality</td>
                      <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${
                        commTask.countTypeSkills.count_B1_lq
                      }</td>
        
                    </tr >
                    <tr>
                      
                      <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Writing</td>
                      <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${
                        commTask.countTypeSkills.count_B1_w
                      }</td>
        
                    </tr>
                  </tbody>
              </table>

              <table  style="font-family: 'Calibri', sans-serif;border-collapse: collapse;text-align: center; font-size: 16px;">
              <!-- B2 -->
              <tbody style="background-color: #9cc2e5; color: #0432ff; border-collapse: collapse; border: 1px solid #fff; padding: 2px" >
                <tr style="background-color: #9cc2e5; color: #0432ff;">
                  <td style=" background-color: #0000FF; color: #fff; font-weight: bold;padding: 2px 16px;" rowspan="6">B2</td>
        
                  <!-- L-B2-1 đến L-B2-6 -->
                  <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left">Listening</td>
                  <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${
                    commTask.countTypeSkills.count_B2_l
                  }</td>

                </tr>
                
                <tr>
                  <!-- R-C2-2 đến R-C2-7 -->
                  <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left">Reading</td>
                  <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${
                    commTask.countTypeSkills.count_B2_r
                  }</td>

                </tr>
                <tr>
                  <!-- S-C2-8 đến S-C2-10 -->
                  <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Speaking</td>
                  <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${
                    commTask.countTypeSkills.count_B2_s
                  }</td>

                </tr>
                <tr>
                  <!-- STR-C2-11 -->
                  <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Strategy</td>
                  <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${
                    commTask.countTypeSkills.count_B2_str
                  }</td>

                </tr >
                <tr>
                  <!-- LQ-C2-12 đến LQ-C2-15 -->
                  <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Language quality</td>
                  <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${
                    commTask.countTypeSkills.count_B2_lq
                  }</td>
                </tr >
                <tr>
                  <!-- W-C2-16 đến W-C2-23 -->
                  <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Writing</td>
                  <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${
                    commTask.countTypeSkills.count_B2_w
                  }</td>
                </tr>
              </tbody>
              <!-- B1 -->

              </table>
            </div>
            <div class="c1_c2_level">
              <table  style="font-family: 'Calibri', sans-serif;border-collapse: collapse;text-align: center; font-size: 16px;">
                <!-- C1 -->
                <tbody style="background-color: #d9e2f3; color: #2f5496; border-collapse: collapse; border: 1px solid #fff; padding: 2px" >
                  <tr style="background-color: #d9e2f3; color: #2f5496;">
                    <td style=" background-color: #333399; color: #fff; font-weight: bold;padding: 2px 16px;" rowspan="6">C1</td>
          
                    <!-- L-C1-1 đến L-C1-6 -->
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left">Listening</td>
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${
                      commTask.countTypeSkills.count_C1_l
                    }</td>
                  </tr>
                  
                  <tr>
                    <!-- R-C2-2 đến R-C2-7 -->
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left">Reading</td>
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${
                      commTask.countTypeSkills.count_C1_r
                    }</td>
                  </tr>
                  <tr>
                    <!-- S-C2-8 đến S-C2-10 -->
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Speaking</td>
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${
                      commTask.countTypeSkills.count_C1_s
                    }</td>
                  </tr>
                  <tr>
                    <!-- STR-C2-11 -->
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Strategy</td>
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${
                      commTask.countTypeSkills.count_C1_str
                    }</td>
                  </tr >
                  <tr>
                    <!-- LQ-C2-12 đến LQ-C2-15 -->
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Language quality</td>
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${
                      commTask.countTypeSkills.count_C1_lq
                    }</td>
                  </tr >
                  <tr>
                    <!-- W-C2-16 đến W-C2-23 -->
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Writing</td>
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${
                      commTask.countTypeSkills.count_C1_w
                    }</td>
                  </tr>
                </tbody>
              </table>
                <!-- C2 -->
              <table  style="font-family: 'Calibri', sans-serif;border-collapse: collapse;text-align: center; font-size: 16px;">
        
                <tbody style="background-color: #e6daff; color: #7030a0; border-collapse: collapse; border: 1px solid #fff; padding: 2px" >
                  <tr style="background-color: #e6daff; color: #7030a0;">
                    <td style=" background-color: #993366; color: #fff; font-weight: bold;padding: 2px 16px;" rowspan="6">C2</td>
                    <!-- L-C2-1 -->
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left">Listening</td>
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${
                      commTask.countTypeSkills.count_C2_l
                    }</td>
                  </tr>
                  <tr>
                    <!-- R-C2-2 đến R-C2-7 -->
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left">Reading</td>
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${
                      commTask.countTypeSkills.count_C2_r
                    }</td>
                  </tr>
                  <tr>
                    <!-- S-C2-8 đến S-C2-10 -->
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Speaking</td>
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${
                      commTask.countTypeSkills.count_C2_s
                    }</td>
                  </tr>
                  <tr>
                    <!-- STR-C2-11 -->
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Strategy</td>
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${
                      commTask.countTypeSkills.count_C2_str
                    }</td>
                  </tr >
                  <tr>
                    <!-- LQ-C2-12 đến LQ-C2-15 -->
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Language quality</td>
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${
                      commTask.countTypeSkills.count_C2_lq
                    }</td>
                  </tr >
                  <tr>
                    <!-- W-C2-16 đến W-C2-23 -->
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Writing</td>
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${
                      commTask.countTypeSkills.count_C2_w
                    }</td>
                  </tr>
                </tbody>
        
              </table>
            </div>

          </div>

          <div class="seBlock">
            <div class="se" style="display: flex; flex-direction: column; gap: 20px;">
                <!-- S-E -->
              <table  style="font-family: 'Calibri', sans-serif;border-collapse: collapse;text-align: center; font-size: 16px;">
                <tbody style="background-color: #ff1717;color: #FF0000; border-collapse: collapse; border: 1px solid #fff; padding: 2px" >
                  <tr style="background-color: #ffd0d3;color: #FF0000;">
                    <td style="background-color: #ff1717; color: #fff; font-size: 12px;width: 172px;" colspan="4">SOCIO-EMOTIONAL DIMENSION</td>
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${
                      commTask.countTypeSkills.count_se
                    }</td>

                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="plBlock">
            <div class="pl" style="display: flex; flex-direction: column; gap: 20px;">
              <!-- P-L -->
              <table  style="font-family: 'Calibri', sans-serif;border-collapse: collapse;text-align: center; font-size: 16px;">
                <tbody style="background-color: #5b9bd5;color: #000000; border-collapse: collapse; border: 1px solid #fff; padding: 2px" >
                  <tr style="background-color: #9bc2e6;color: #000000;">
                    <td style="background-color: #5b9bd5;color: #000000; font-size: 12px;width: 172px; " colspan="4">PSYCHOMOTOR DIMENSION</td>
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${
                      commTask.countTypeSkills.rangeP
                    }</td>

                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>

        <div class = 'titleCommTaskOverlapBlock'>
          <h3>Thông tin giá tiền | Price information</h3>
        </div>
        <div class="tablePrice tableDetail">

          <div class="cefrBlock">

            <div class="a1_a2_level" >
              <table  style="font-family: 'Calibri', sans-serif;border-collapse: collapse;text-align: center; font-size: 16px;">
                <!-- A1 -->
                <tbody style="background-color: #ffd0d3;color: #FF0000; border-collapse: collapse; border: 1px solid #fff; padding: 2px;" >
                  <tr style="background-color: #ffd0d3;color: #FF0000;">
                    <td class="a1_level" style=" background-color: #FF0000; color: #fff; font-weight: bold;padding: 2px 16px;">A1</td>
          
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left">
                    Free(GIFT)
                    </td>
                  </tr>
        
                </tbody>
              </table>
              <table  style="font-family: 'Calibri', sans-serif;border-collapse: collapse;text-align: center; font-size: 16px;">
              <!-- A2 -->
              <tbody style="background-color: #fbe4d5;color: #ed7d31; border-collapse: collapse; border: 1px solid #fff; padding: 2px" >
                <tr style="background-color: #fbe4d5;color: #ed7d31;">
                  <td class="a2_level" style=" background-color: #FF9900; color: #000; font-weight: bold;padding: 2px 16px;">A2</td>
        
                  <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left">
                  ${prices.range2
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",") } đ/skill
                  
                  </td>
                </tr>
              </tbody>
              </table>
            </div>
            <div class="b1_b2_level">
              <table  style="font-family: 'Calibri', sans-serif;border-collapse: collapse;text-align: center; font-size: 16px;">
                  <tbody style="background-color: #fef2cb;color: #bf9000; border-collapse: collapse; border: 1px solid #fff; padding: 2px" >
                    <tr style="background-color: #fef2cb;color: #bf9000;">
                      <td class="b1_level" style=" background-color: #FFFF00; color: #000; font-weight: bold;padding: 2px 16px;">B1</td>
                      
                      <!-- L-B1-1 đến L-B1-6 -->
                      <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left">
                      ${prices.range3
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} đ/skill

                      </td>
                    </tr>
                  </tbody>
              </table>

              <table  style="font-family: 'Calibri', sans-serif;border-collapse: collapse;text-align: center; font-size: 16px;">
              <!-- B2 -->
              <tbody style="background-color: #9cc2e5; color: #0432ff; border-collapse: collapse; border: 1px solid #fff; padding: 2px" >
                <tr style="background-color: #9cc2e5; color: #0432ff;">
                  <td class="b2_level" style=" background-color: #0000FF; color: #fff; font-weight: bold;padding: 2px 16px;">B2</td>
        
                  <!-- L-B2-1 đến L-B2-6 -->
                  <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left">
                  ${prices.range4
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} đ/skill
                  </td>
                </tr>
              </tbody>
              <!-- B1 -->

              </table>
            </div>
            <div class="c1_c2_level">
              <table  style="font-family: 'Calibri', sans-serif;border-collapse: collapse;text-align: center; font-size: 16px;">
                <!-- C1 -->
                <tbody style="background-color: #d9e2f3; color: #2f5496; border-collapse: collapse; border: 1px solid #fff; padding: 2px" >
                  <tr style="background-color: #d9e2f3; color: #2f5496;">
                    <td class="c1_level" style=" background-color: #333399; color: #fff; font-weight: bold;padding: 2px 16px;">C1</td>
          
                    <!-- L-C1-1 đến L-C1-6 -->
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left">
                    ${prices.range5
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} đ/skill
                    </td>
                  </tr>
                </tbody>
              </table>
                <!-- C2 -->
              <table  style="font-family: 'Calibri', sans-serif;border-collapse: collapse;text-align: center; font-size: 16px;">
        
                <tbody style="background-color: #e6daff; color: #7030a0; border-collapse: collapse; border: 1px solid #fff; padding: 2px" >
                  <tr style="background-color: #e6daff; color: #7030a0;">
                    <td class="c2_level" style=" background-color: #993366; color: #fff; font-weight: bold;padding: 2px 16px;" rowspan="6">C2</td>
                    <!-- L-C2-1 -->
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left">
                    ${prices.range6
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} đ/skill
                    </td>
                  </tr>
                </tbody>
        
              </table>
            </div>

          </div>

          <div class="seBlock">
            <div class="se" style="display: flex; flex-direction: column; gap: 20px;">
                <!-- S-E -->
              <table  style="font-family: 'Calibri', sans-serif;border-collapse: collapse;text-align: center; font-size: 16px;">
                <tbody style="background-color: #ff1717;color: #FF0000; border-collapse: collapse; border: 1px solid #fff; padding: 2px" >
                  <tr style="background-color: #ffd0d3;color: #FF0000;">
                    <td class="se_level" style="background-color: #ff1717; color: #fff; font-size: 12px;width: 172px;" colspan="4">S-E DIMENSION</td>
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 40px">
                    0 đ
                    
                    </td>

                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="plBlock">
            <div class="pl" style="display: flex; flex-direction: column; gap: 20px;">
              <!-- P-L -->
              <table  style="font-family: 'Calibri', sans-serif;border-collapse: collapse;text-align: center; font-size: 16px;">
                <tbody style="background-color: #5b9bd5;color: #000000; border-collapse: collapse; border: 1px solid #fff; padding: 2px" >
                  <tr style="background-color: #9bc2e6;color: #000000;">
                    <td class="pl_level" style="background-color: #5b9bd5;color: #000000; font-size: 12px;width: 172px; " colspan="4">PSYCHOMOTOR DIMENSION</td>
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 40px">!*</td>

                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>

      </div>
    
    </div>
  </div>
</div>
`;

  detailCommTaskBlock2.innerHTML += detailCommTaskBlock2Clicked;
};
const loadDetailCommTaskBlock3 = (dataOverlap, dataNotOverlap) => {
  const detailCommTask = document.querySelector(".detailCommTask");
  const detailCommTaskBlock3 = document.createElement("div");
  detailCommTaskBlock3.classList.add("detailCommTaskBlock3_Overlap_nonOverlap");
  detailCommTask.appendChild(detailCommTaskBlock3);

  let detailCommTaskOverlap = "";
  let detailCommTaskNew = "";
  if (
    dataNotOverlap.length !== 0 &&
    dataOverlap.length !== 0 &&
    dataOverlap[0].Skills.length !== 0
  ) {
    // console.log(dataOverlap)
    [dataOverlap] = dataOverlap;
    [dataNotOverlap] = dataNotOverlap;

    // Bạn thực hiện công việc gì đó để tạo nội dung của detailCommTaskOverlap
    detailCommTaskOverlap = `
    <div class="${dataOverlap._id.$oid} desc-comp-offer">
      <div class="row desc-comp-offer-cont-pro">
      <div class = 'commTaskOverlapBlock'>
        <div class = 'titleCommTaskOverlapBlock'>
          <h3>Kỹ năng đã có trong communication task đã sử dụng</h3>
        </div>

        <div class="tableDetail">

          <div class="cefrBlock">
  
            <div class="a1_a2_level" >
              <table  style="font-family: 'Calibri', sans-serif;border-collapse: collapse;text-align: center; font-size: 16px;">
                <!-- A1 -->
                <tbody style="background-color: #ffd0d3;color: #FF0000; border-collapse: collapse; border: 1px solid #fff; padding: 2px;" >
                  <tr style="background-color: #ffd0d3;color: #FF0000;">
                    <td style=" background-color: #FF0000; color: #fff; font-weight: bold;padding: 2px 16px;" rowspan="6">A1</td>
          
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left">Listening</td>
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataOverlap.countTypeSkills.count_A1_l}</td>
        
                  </tr>
                  
                  <tr>
                    <!-- R-C2-2 đến R-C2-7 -->
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left">Reading</td>
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataOverlap.countTypeSkills.count_A1_r}</td>
        
                  </tr>
                  <tr>
                    <!-- S-C2-8 đến S-C2-10 -->
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Speaking</td>
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataOverlap.countTypeSkills.count_A1_s}</td>
        
                  </tr>
                  <tr>
                    <!-- STR-C2-11 -->
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Strategy</td>
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataOverlap.countTypeSkills.count_A1_str}</td>
        
                  </tr >
                  <tr>
                    <!-- W-C2-16 đến W-C2-23 -->
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Language quality</td>
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">0</td>
        
                  </tr>
                  <tr>
                    <!-- W-C2-16 đến W-C2-23 -->
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Writing</td>
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataOverlap.countTypeSkills.count_A1_w}</td>
        
                  </tr>
        
                </tbody>
              </table>
              <table  style="font-family: 'Calibri', sans-serif;border-collapse: collapse;text-align: center; font-size: 16px;">
              <!-- A2 -->
              <tbody style="background-color: #fbe4d5;color: #ed7d31; border-collapse: collapse; border: 1px solid #fff; padding: 2px" >
                <tr style="background-color: #fbe4d5;color: #ed7d31;">
                  <td style=" background-color: #FF9900; color: #000; font-weight: bold;padding: 2px 16px;" rowspan="6">A2</td>
        
                  <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left">Listening</td>
                  <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataOverlap.countTypeSkills.count_A2_l}</td>
    
                </tr>
                
                <tr>
                  <!-- R-C2-2 đến R-C2-7 -->
                  <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left">Reading</td>
                  <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataOverlap.countTypeSkills.count_A2_r}</td>
    
                </tr>
                <tr>
                  <!-- S-C2-8 đến S-C2-10 -->
                  <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Speaking</td>
                  <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataOverlap.countTypeSkills.count_A2_s}</td>
    
                </tr>
                <tr>
                  <!-- STR-C2-11 -->
                  <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Strategy</td>
                  <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataOverlap.countTypeSkills.count_A2_str}</td>
    
                </tr >
                <tr>
                  <!-- LQ-C2-12 đến LQ-C2-15 -->
                  <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Language quality</td>
                  <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataOverlap.countTypeSkills.count_A2_lq}</td>
    
                </tr >
                <tr>
                  <!-- W-C2-16 đến W-C2-23 -->
                  <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Writing</td>
                  <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataOverlap.countTypeSkills.count_A2_w}</td>
    
                </tr>
              </tbody>
              </table>
            </div>
            <div class="b1_b2_level">
              <table  style="font-family: 'Calibri', sans-serif;border-collapse: collapse;text-align: center; font-size: 16px;">
                  <tbody style="background-color: #fef2cb;color: #bf9000; border-collapse: collapse; border: 1px solid #fff; padding: 2px" >
                    <tr style="background-color: #fef2cb;color: #bf9000;">
                      <td style=" background-color: #FFFF00; color: #000; font-weight: bold;padding: 2px 16px;" rowspan="6">B1</td>
                      
                      <!-- L-B1-1 đến L-B1-6 -->
                      <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left">Listening</td>
                      <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataOverlap.countTypeSkills.count_B1_l}</td>
        
                    </tr>
                    
                    <tr>
                      <!-- R-C2-2 đến R-C2-7 -->
                      <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left">Reading</td>
                      <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataOverlap.countTypeSkills.count_B1_r}</td>
        
                    </tr>
                    <tr>
                      <!-- S-C2-8 đến S-C2-10 -->
                      <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Speaking</td>
                      <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataOverlap.countTypeSkills.count_B1_s}</td>
        
                    </tr>
                    <tr>
                      <!-- STR-C2-11 -->
                      <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Strategy</td>
                      <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataOverlap.countTypeSkills.count_B1_str}</td>
        
                    </tr >
                    <tr>
                      <!-- LQ-C2-12 đến LQ-C2-15 -->
                      <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Language quality</td>
                      <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataOverlap.countTypeSkills.count_B1_lq}</td>
        
                    </tr >
                    <tr>
                      <!-- W-C2-16 đến W-C2-23 -->
                      <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Writing</td>
                      <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataOverlap.countTypeSkills.count_A2_w}</td>
        
                    </tr>
                  </tbody>
              </table>
    
              <table  style="font-family: 'Calibri', sans-serif;border-collapse: collapse;text-align: center; font-size: 16px;">
              <!-- B2 -->
              <tbody style="background-color: #9cc2e5; color: #0432ff; border-collapse: collapse; border: 1px solid #fff; padding: 2px" >
                <tr style="background-color: #9cc2e5; color: #0432ff;">
                  <td style=" background-color: #0000FF; color: #fff; font-weight: bold;padding: 2px 16px;" rowspan="6">B2</td>
        
                  <!-- L-B2-1 đến L-B2-6 -->
                  <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left">Listening</td>
                  <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataOverlap.countTypeSkills.count_B2_l}</td>
    
                </tr>
                
                <tr>
                  <!-- R-C2-2 đến R-C2-7 -->
                  <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left">Reading</td>
                  <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataOverlap.countTypeSkills.count_B2_r}</td>
    
                </tr>
                <tr>
                  <!-- S-C2-8 đến S-C2-10 -->
                  <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Speaking</td>
                  <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataOverlap.countTypeSkills.count_B2_s}</td>
    
                </tr>
                <tr>
                  <!-- STR-C2-11 -->
                  <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Strategy</td>
                  <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataOverlap.countTypeSkills.count_B2_str}</td>
    
                </tr >
                <tr>
                  <!-- LQ-C2-12 đến LQ-C2-15 -->
                  <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Language quality</td>
                  <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataOverlap.countTypeSkills.count_B2_lq}</td>
                </tr >
                <tr>
                  <!-- W-C2-16 đến W-C2-23 -->
                  <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Writing</td>
                  <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataOverlap.countTypeSkills.count_B2_w}</td>
                </tr>
              </tbody>
              <!-- B1 -->
    
              </table>
            </div>
            <div class="c1_c2_level">
              <table  style="font-family: 'Calibri', sans-serif;border-collapse: collapse;text-align: center; font-size: 16px;">
                <!-- C1 -->
                <tbody style="background-color: #d9e2f3; color: #2f5496; border-collapse: collapse; border: 1px solid #fff; padding: 2px" >
                  <tr style="background-color: #d9e2f3; color: #2f5496;">
                    <td style=" background-color: #333399; color: #fff; font-weight: bold;padding: 2px 16px;" rowspan="6">C1</td>
          
                    <!-- L-C1-1 đến L-C1-6 -->
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left">Listening</td>
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataOverlap.countTypeSkills.count_C1_l}</td>
                  </tr>
                  
                  <tr>
                    <!-- R-C2-2 đến R-C2-7 -->
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left">Reading</td>
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataOverlap.countTypeSkills.count_C1_r}</td>
                  </tr>
                  <tr>
                    <!-- S-C2-8 đến S-C2-10 -->
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Speaking</td>
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataOverlap.countTypeSkills.count_C1_s}</td>
                  </tr>
                  <tr>
                    <!-- STR-C2-11 -->
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Strategy</td>
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataOverlap.countTypeSkills.count_C1_str}</td>
                  </tr >
                  <tr>
                    <!-- LQ-C2-12 đến LQ-C2-15 -->
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Language quality</td>
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataOverlap.countTypeSkills.count_C1_lq}</td>
                  </tr >
                  <tr>
                    <!-- W-C2-16 đến W-C2-23 -->
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Writing</td>
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataOverlap.countTypeSkills.count_C1_w}</td>
                  </tr>
                </tbody>
              </table>
                <!-- C2 -->
              <table  style="font-family: 'Calibri', sans-serif;border-collapse: collapse;text-align: center; font-size: 16px;">
        
                <tbody style="background-color: #e6daff; color: #7030a0; border-collapse: collapse; border: 1px solid #fff; padding: 2px" >
                  <tr style="background-color: #e6daff; color: #7030a0;">
                    <td style=" background-color: #993366; color: #fff; font-weight: bold;padding: 2px 16px;" rowspan="6">C2</td>
                    <!-- L-C2-1 -->
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left">Listening</td>
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataOverlap.countTypeSkills.count_C2_l}</td>
                  </tr>
                  <tr>
                    <!-- R-C2-2 đến R-C2-7 -->
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left">Reading</td>
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataOverlap.countTypeSkills.count_C2_r}</td>
                  </tr>
                  <tr>
                    <!-- S-C2-8 đến S-C2-10 -->
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Speaking</td>
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataOverlap.countTypeSkills.count_C2_s}</td>
                  </tr>
                  <tr>
                    <!-- STR-C2-11 -->
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Strategy</td>
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataOverlap.countTypeSkills.count_C2_str}</td>
                  </tr >
                  <tr>
                    <!-- LQ-C2-12 đến LQ-C2-15 -->
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Language quality</td>
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataOverlap.countTypeSkills.count_C2_lq}</td>
                  </tr >
                  <tr>
                    <!-- W-C2-16 đến W-C2-23 -->
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Writing</td>
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataOverlap.countTypeSkills.count_C2_w}</td>
                  </tr>
                </tbody>
        
              </table>
            </div>

          </div>

          <div class="seBlock">
            <div class="se" style="display: flex; flex-direction: column; gap: 20px;">
                <!-- S-E -->
              <table  style="font-family: 'Calibri', sans-serif;border-collapse: collapse;text-align: center; font-size: 16px;">
                <tbody style="background-color: #ff1717;color: #FF0000; border-collapse: collapse; border: 1px solid #fff; padding: 2px" >
                  <tr style="background-color: #ffd0d3;color: #FF0000;">
                    <td style="background-color: #ff1717; color: #fff; font-size: 12px;width: 172px;" colspan="4">SOCIO-EMOTIONAL DIMENSION</td>
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataOverlap.countTypeSkills.count_se}</td>
    
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
    
          <div class="plBlock">
            <div class="pl" style="display: flex; flex-direction: column; gap: 20px;">
            <!-- P-L -->
              <table  style="font-family: 'Calibri', sans-serif;border-collapse: collapse;text-align: center; font-size: 16px;">
                <tbody style="background-color: #5b9bd5;color: #000000; border-collapse: collapse; border: 1px solid #fff; padding: 2px" >
                  <tr style="background-color: #9bc2e6;color: #000000;">
                    <td style="background-color: #5b9bd5;color: #000000; font-size: 12px;width: 172px; " colspan="4">PSYCHOMOTOR DIMENSION</td>
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataOverlap.countTypeSkills.rangeP}</td>
    
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>

    </div>
    `;
    detailCommTaskNew = `
    <div class="${dataNotOverlap._id.$oid} desc-comp-offer">
      <div class="row desc-comp-offer-cont-pro">
        <div class = "commTaskNewBlock">
          <div class='titleCommTaskNew'>
            <h3>Kỹ năng mới của ${dataNotOverlap.name}</h3>
          </div>
          <div class="tableDetail">

            <div class="cefrBlock">
    
              <div class="a1_a2_level" >
                <table  style="font-family: 'Calibri', sans-serif;border-collapse: collapse;text-align: center; font-size: 16px;">
                  <!-- A1 -->
                  <tbody style="background-color: #ffd0d3;color: #FF0000; border-collapse: collapse; border: 1px solid #fff; padding: 2px;" >
                    <tr style="background-color: #ffd0d3;color: #FF0000;">
                      <td style=" background-color: #FF0000; color: #fff; font-weight: bold;padding: 2px 16px;" rowspan="6">A1</td>
            
                      <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left">Listening</td>
                      <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataNotOverlap.countTypeSkills.count_A1_l}</td>
          
                    </tr>
                    
                    <tr>
                      <!-- R-C2-2 đến R-C2-7 -->
                      <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left">Reading</td>
                      <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataNotOverlap.countTypeSkills.count_A1_r}</td>
          
                    </tr>
                    <tr>
                      <!-- S-C2-8 đến S-C2-10 -->
                      <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Speaking</td>
                      <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataNotOverlap.countTypeSkills.count_A1_s}</td>
          
                    </tr>
                    <tr>
                      <!-- STR-C2-11 -->
                      <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Strategy</td>
                      <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataNotOverlap.countTypeSkills.count_A1_str}</td>
          
                    </tr >
                    <tr>
                      <!-- W-C2-16 đến W-C2-23 -->
                      <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Language quality</td>
                      <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">0</td>
          
                    </tr>
                    <tr>
                      <!-- W-C2-16 đến W-C2-23 -->
                      <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Writing</td>
                      <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataNotOverlap.countTypeSkills.count_A1_w}</td>
          
                    </tr>
          
                  </tbody>
                </table>
                <table  style="font-family: 'Calibri', sans-serif;border-collapse: collapse;text-align: center; font-size: 16px;">
                <!-- A2 -->
                <tbody style="background-color: #fbe4d5;color: #ed7d31; border-collapse: collapse; border: 1px solid #fff; padding: 2px" >
                  <tr style="background-color: #fbe4d5;color: #ed7d31;">
                    <td style=" background-color: #FF9900; color: #000; font-weight: bold;padding: 2px 16px;" rowspan="6">A2</td>
          
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left">Listening</td>
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataNotOverlap.countTypeSkills.count_A2_l}</td>
      
                  </tr>
                  
                  <tr>
                    <!-- R-C2-2 đến R-C2-7 -->
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left">Reading</td>
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataNotOverlap.countTypeSkills.count_A2_r}</td>
      
                  </tr>
                  <tr>
                    <!-- S-C2-8 đến S-C2-10 -->
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Speaking</td>
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataNotOverlap.countTypeSkills.count_A2_s}</td>
      
                  </tr>
                  <tr>
                    <!-- STR-C2-11 -->
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Strategy</td>
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataNotOverlap.countTypeSkills.count_A2_str}</td>
      
                  </tr >
                  <tr>
                    <!-- LQ-C2-12 đến LQ-C2-15 -->
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Language quality</td>
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataNotOverlap.countTypeSkills.count_A2_lq}</td>
      
                  </tr >
                  <tr>
                    <!-- W-C2-16 đến W-C2-23 -->
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Writing</td>
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataNotOverlap.countTypeSkills.count_A2_w}</td>
      
                  </tr>
                </tbody>
                </table>
              </div>
              <div class="b1_b2_level">
                <table  style="font-family: 'Calibri', sans-serif;border-collapse: collapse;text-align: center; font-size: 16px;">
                    <tbody style="background-color: #fef2cb;color: #bf9000; border-collapse: collapse; border: 1px solid #fff; padding: 2px" >
                      <tr style="background-color: #fef2cb;color: #bf9000;">
                        <td style=" background-color: #FFFF00; color: #000; font-weight: bold;padding: 2px 16px;" rowspan="6">B1</td>
                        
                        <!-- L-B1-1 đến L-B1-6 -->
                        <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left">Listening</td>
                        <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataNotOverlap.countTypeSkills.count_B1_l}</td>
          
                      </tr>
                      
                      <tr>
                        <!-- R-C2-2 đến R-C2-7 -->
                        <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left">Reading</td>
                        <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataNotOverlap.countTypeSkills.count_B1_r}</td>
          
                      </tr>
                      <tr>
                        <!-- S-C2-8 đến S-C2-10 -->
                        <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Speaking</td>
                        <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataNotOverlap.countTypeSkills.count_B1_s}</td>
          
                      </tr>
                      <tr>
                        <!-- STR-C2-11 -->
                        <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Strategy</td>
                        <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataNotOverlap.countTypeSkills.count_B1_str}</td>
          
                      </tr >
                      <tr>
                        <!-- LQ-C2-12 đến LQ-C2-15 -->
                        <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Language quality</td>
                        <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataNotOverlap.countTypeSkills.count_B1_lq}</td>
          
                      </tr >
                      <tr>
                        <!-- W-C2-16 đến W-C2-23 -->
                        <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Writing</td>
                        <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataNotOverlap.countTypeSkills.count_A2_w}</td>
          
                      </tr>
                    </tbody>
                </table>
      
                <table  style="font-family: 'Calibri', sans-serif;border-collapse: collapse;text-align: center; font-size: 16px;">
                <!-- B2 -->
                <tbody style="background-color: #9cc2e5; color: #0432ff; border-collapse: collapse; border: 1px solid #fff; padding: 2px" >
                  <tr style="background-color: #9cc2e5; color: #0432ff;">
                    <td style=" background-color: #0000FF; color: #fff; font-weight: bold;padding: 2px 16px;" rowspan="6">B2</td>
          
                    <!-- L-B2-1 đến L-B2-6 -->
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left">Listening</td>
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataNotOverlap.countTypeSkills.count_B2_l}</td>
      
                  </tr>
                  
                  <tr>
                    <!-- R-C2-2 đến R-C2-7 -->
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left">Reading</td>
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataNotOverlap.countTypeSkills.count_B2_r}</td>
      
                  </tr>
                  <tr>
                    <!-- S-C2-8 đến S-C2-10 -->
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Speaking</td>
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataNotOverlap.countTypeSkills.count_B2_s}</td>
      
                  </tr>
                  <tr>
                    <!-- STR-C2-11 -->
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Strategy</td>
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataNotOverlap.countTypeSkills.count_B2_str}</td>
      
                  </tr >
                  <tr>
                    <!-- LQ-C2-12 đến LQ-C2-15 -->
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Language quality</td>
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataNotOverlap.countTypeSkills.count_B2_lq}</td>
                  </tr >
                  <tr>
                    <!-- W-C2-16 đến W-C2-23 -->
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Writing</td>
                    <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataNotOverlap.countTypeSkills.count_B2_w}</td>
                  </tr>
                </tbody>
                <!-- B1 -->
      
                </table>
              </div>
              <div class="c1_c2_level">
                <table  style="font-family: 'Calibri', sans-serif;border-collapse: collapse;text-align: center; font-size: 16px;">
                  <!-- C1 -->
                  <tbody style="background-color: #d9e2f3; color: #2f5496; border-collapse: collapse; border: 1px solid #fff; padding: 2px" >
                    <tr style="background-color: #d9e2f3; color: #2f5496;">
                      <td style=" background-color: #333399; color: #fff; font-weight: bold;padding: 2px 16px;" rowspan="6">C1</td>
            
                      <!-- L-C1-1 đến L-C1-6 -->
                      <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left">Listening</td>
                      <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataNotOverlap.countTypeSkills.count_C1_l}</td>
                    </tr>
                    
                    <tr>
                      <!-- R-C2-2 đến R-C2-7 -->
                      <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left">Reading</td>
                      <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataNotOverlap.countTypeSkills.count_C1_r}</td>
                    </tr>
                    <tr>
                      <!-- S-C2-8 đến S-C2-10 -->
                      <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Speaking</td>
                      <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataNotOverlap.countTypeSkills.count_C1_s}</td>
                    </tr>
                    <tr>
                      <!-- STR-C2-11 -->
                      <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Strategy</td>
                      <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataNotOverlap.countTypeSkills.count_C1_str}</td>
                    </tr >
                    <tr>
                      <!-- LQ-C2-12 đến LQ-C2-15 -->
                      <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Language quality</td>
                      <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataNotOverlap.countTypeSkills.count_C1_lq}</td>
                    </tr >
                    <tr>
                      <!-- W-C2-16 đến W-C2-23 -->
                      <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Writing</td>
                      <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataNotOverlap.countTypeSkills.count_C1_w}</td>
                    </tr>
                  </tbody>
                </table>
                  <!-- C2 -->
                <table  style="font-family: 'Calibri', sans-serif;border-collapse: collapse;text-align: center; font-size: 16px;">
          
                  <tbody style="background-color: #e6daff; color: #7030a0; border-collapse: collapse; border: 1px solid #fff; padding: 2px" >
                    <tr style="background-color: #e6daff; color: #7030a0;">
                      <td style=" background-color: #993366; color: #fff; font-weight: bold;padding: 2px 16px;" rowspan="6">C2</td>
                      <!-- L-C2-1 -->
                      <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left">Listening</td>
                      <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataNotOverlap.countTypeSkills.count_C2_l}</td>
                    </tr>
                    <tr>
                      <!-- R-C2-2 đến R-C2-7 -->
                      <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left">Reading</td>
                      <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataNotOverlap.countTypeSkills.count_C2_r}</td>
                    </tr>
                    <tr>
                      <!-- S-C2-8 đến S-C2-10 -->
                      <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Speaking</td>
                      <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataNotOverlap.countTypeSkills.count_C2_s}</td>
                    </tr>
                    <tr>
                      <!-- STR-C2-11 -->
                      <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Strategy</td>
                      <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataNotOverlap.countTypeSkills.count_C2_str}</td>
                    </tr >
                    <tr>
                      <!-- LQ-C2-12 đến LQ-C2-15 -->
                      <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Language quality</td>
                      <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataNotOverlap.countTypeSkills.count_C2_lq}</td>
                    </tr >
                    <tr>
                      <!-- W-C2-16 đến W-C2-23 -->
                      <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: left;">Writing</td>
                      <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataNotOverlap.countTypeSkills.count_C2_w}</td>
                    </tr>
                  </tbody>
          
                </table>
              </div>
            </div>

            <div class="seBlock">
              <div class="se" style="display: flex; flex-direction: column; gap: 20px;">
                  <!-- S-E -->
                <table  style="font-family: 'Calibri', sans-serif;border-collapse: collapse;text-align: center; font-size: 16px;">
                  <tbody style="background-color: #ff1717;color: #FF0000; border-collapse: collapse; border: 1px solid #fff; padding: 2px" >
                    <tr style="background-color: #ffd0d3;color: #FF0000;">
                      <td style="background-color: #ff1717; color: #fff; font-size: 12px;width: 172px;" colspan="4">SOCIO-EMOTIONAL DIMENSION</td>
                      <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataNotOverlap.countTypeSkills.count_se}</td>
      
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
     
            
            
            <div class="plBlock">
              <div class="pl" style="display: flex; flex-direction: column; gap: 20px;">
              <!-- P-L -->
                <table  style="font-family: 'Calibri', sans-serif;border-collapse: collapse;text-align: center; font-size: 16px;">
                  <tbody style="background-color: #5b9bd5;color: #000000; border-collapse: collapse; border: 1px solid #fff; padding: 2px" >
                    <tr style="background-color: #9bc2e6;color: #000000;">
                      <td style="background-color: #5b9bd5;color: #000000; font-size: 12px;width: 172px; " colspan="4">PSYCHOMOTOR DIMENSION</td>
                      <td title="" style="border-collapse: collapse; border: 2px solid #fff; padding: 2px 6px;text-align: center; width: 30px">${dataNotOverlap.countTypeSkills.rangeP}</td>
      
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    `;
  }

  if (detailCommTaskOverlap !== undefined) {
    detailCommTaskBlock3.innerHTML += detailCommTaskOverlap + detailCommTaskNew;
  } else {
    return;
  }
};

// loadDetailCommTaskBlock1();
const addCommTaskListener = (id, data, dataOverlap, dataNotOverlap) => {
  const commTask = document.getElementById(`${id}`); // có 21 commTask được get làm Element

  if (commTask) {
    // nếu Click vào cái Element CommTask tương ứng
    const detailButton = commTask.querySelector(".btnDetail");
    if (detailButton) {
      // Nếu tìm thấy nút "Detail"
      detailButton.addEventListener("click", (event) => {
        event.stopPropagation(); // Ngăn chặn sự kiện click lan ra các phần tử cha

        // Thực hiện các hành động khi nút "Detail" được bấm
        emptyCommTask(); // Xóa hết cái CommTask đã load trong data
        // Lấy đối tượng div với id là "comm_tasks"
        const commTasksContainer = document.getElementById("comm_tasks");
        const detailCommTask = document.createElement("div");
        detailCommTask.classList.add("detailCommTask");
        commTasksContainer.appendChild(detailCommTask);

        // filteredTasks là 1 mảng chứa 1 đối tượng commTask ví trí 0
        let commTaskBlock1Clicked;
        // chưa bấm pricing => detail chính data
        if (dataNotOverlap.length === 0) {
          commTaskBlock1Clicked = data.filter(
            (commTask) => commTask._id.$oid === `${id}`
          );
        } else {
          commTaskBlock1Clicked = dataNotOverlap.filter(
            (commTask) => commTask._id.$oid === `${id}`
          );
        }

        const commTaskBlock2Clicked = data.filter(
          (commTask) => commTask._id.$oid === `${id}`
        );
        const commTaskOverlap = dataOverlap.filter(
          (commTask) => commTask._id.$oid === `${id}`
        );
        const commTaskNotOverlap = dataNotOverlap.filter(
          (commTask) => commTask._id.$oid === `${id}`
        );
        insertBtnBack();
        loadDetailCommTaskBlock1(commTaskBlock1Clicked);
        loadDetailCommTaskBlock2(commTaskBlock2Clicked);
        loadDetailCommTaskBlock3(commTaskOverlap, commTaskNotOverlap);
      });
    }
  }
};

for (let i = 0; i < idComm.length; i++) {
  // console.log(i);
  // console.log(idComm[i]);
  addCommTaskListener(idComm[i], data, dataOverlap, dataNotOverlap);
}

///SEARCH
const searchCommInput = document.querySelector(".searchs_input");

searchCommInput.addEventListener("input", function () {
  const searchComm = searchCommInput.value.toLowerCase();

  data.forEach(function (commTask) {
    const isVisible =
      commTask.name.toLowerCase().includes(searchComm) ||
      commTask.desc_en.toLowerCase().includes(searchComm) ||
      commTask.desc_vi.toLowerCase().includes(searchComm);

    const taskElement = document.getElementById(commTask._id.$oid); // Adjust the ID selector based on your HTML structure

    if (taskElement) {
      // Toggle the 'hide' class based on visibility
      if (isVisible) {
        taskElement.classList.remove("hide");
      } else {
        taskElement.classList.add("hide");
      }
    }
  });
});

// CSS class definition for hiding elements

// document.addEventListener("DOMContentLoaded", function () {
// Mã JavaScript bạn muốn thực thi khi DOM đã sẵn sàng
// load option của thanh chọn CommTask đã dùng

// Select Full Range
var optionsEl = document.querySelector(".options");
const loadOptions = (data) => {
  data.forEach(function (commTask) {
    var loadOption = `<div style="display: inline-block; 
    margin: 4px; font-size: 14px"
    class="option" data-value="${commTask._id.$oid}">${commTask.name}</div>`;
    optionsEl.innerHTML += loadOption;
  });
};
loadOptions(data); // gọi khi load trang lần đầu tiên

const customSelects = document.querySelectorAll(".custom_select");
function updateSelectedOptions(customSelect) {
  const selectionOptions = Array.from(
    customSelect.querySelectorAll(".option.active")
  ).map(function (option) {
    return {
      value: option.getAttribute("data-value"),
      text: option.textContent.trim(),
    };
  });

  const selectedValues = selectionOptions.map(function (option) {
    // console.log(option.value);
    return option.value;
  });
  // console.log(selectedValues);
  customSelect.querySelector(".tags_input").value = selectedValues.join(", ");

  let tagsHTML = "";
  if (selectedValues.length === 0) {
    tagsHTML =
      '<p style="font-size: 14px" class="placeholder">Communication task full range...</p>';
  } else {
    const maxTagsToShow = 1;
    let additionalTagsCount = 0;

    selectionOptions.forEach(function (option, index) {
      if (index < maxTagsToShow) {
        tagsHTML += `<span style="font-size: 14px" class="tag">${option.text} <span class="remove-tag" data-value="${option.value}">&times;</span></span>`;
      } else {
        additionalTagsCount++;
      }
    });
    if (additionalTagsCount > 0) {
      tagsHTML += `<span class="tag">+${additionalTagsCount}</span>`;
    }
  }
  customSelect.querySelector(".selected-options").innerHTML = tagsHTML;
}
// end function update

customSelects.forEach(function (customSelect) {
  const searchInput = customSelect.querySelector(".search-tags");
  const optionsContainer = customSelect.querySelector(".options");
  const options = customSelect.querySelectorAll(".option");
  const clearButton = customSelect.querySelector(".clear");

  clearButton.addEventListener("click", function () {
    searchInput.value = "";
    options.forEach(function (option) {
      option.style.display = "inline-block";
    });
  });

  searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase();
    // console.log(searchTerm);
    options.forEach(function (option) {
      console.log(option);

      const optionText = option.textContent.trim().toLowerCase();
      const shouldShow = optionText.includes(searchTerm);
      option.style.display = shouldShow ? "inline-block" : "none";
    });

    if (searchTerm) {
      optionsContainer.classList.add("option-search-active");
    } else {
      optionsContainer.classList.remove("option-search-active");
    }
  });
});

customSelects.forEach(function (customSelect) {
  const options = customSelect.querySelectorAll(".option");
  options.forEach(function (option) {
    option.addEventListener("click", function () {
      option.classList.toggle("active");
      updateSelectedOptions(customSelect);
    });
  });
});
////
document.addEventListener("click", function (e) {
  const removeTag = e.target.closest(".remove-tag");
  // console.log(removeTag, "f");
  if (removeTag) {
    const customSelect = removeTag.closest(".custom_select");
    // console.log(customSelect, " a");
    const valueToRemove = removeTag.getAttribute("data-value");
    const escapedValue = CSS.escape(valueToRemove);

    const optionToRemove = customSelect.querySelector(
      `.option[data-value="${escapedValue}"]`
    );
    // console.log(optionToRemove, "c");
    optionToRemove.classList.remove("active");

    updateSelectedOptions(customSelect);
  }
});

// click select box thì mở list selection
const selectBoxes = document.querySelectorAll(".select-box");
selectBoxes.forEach(function (selectBox) {
  selectBox.addEventListener("click", function (e) {
    if (!e.target.closest(".tag")) {
      selectBox.parentNode.classList.toggle("open");
    }
  });
});
// bấm ra ngoài thì tắt list select
document.addEventListener("click", function (e) {
  if (
    !e.target.closest(".custom_select") &&
    !e.target.classList.contains("remove-tag")
  ) {
    customSelects.forEach(function (customSelect) {
      customSelect.classList.remove("open");
    });
  }
});
updateSelectedOptions(customSelects[0]);

// Select Standard /////////////////////////////////////
var optionsStandardEl = document.querySelector(".options_standard");
const loadStandardOptions = (data) => {
  data.forEach(function (commTask) {
    var loadStandardOption = `<div style="display: inline-block; 
    margin: 4px; font-size: 14px"
    class="option_standard" data-value_standard="${commTask._id.$oid}">${commTask.name}</div>`;
    optionsStandardEl.innerHTML += loadStandardOption;
  });
};
loadStandardOptions(data); // gọi khi load trang lần đầu tiên

const customSelectsStandard = document.querySelectorAll(
  ".custom_select_standard"
);
function updateSelectedOptionsStandard(customSelect) {
  const selectionOptionsStandard = Array.from(
    customSelect.querySelectorAll(".option_standard.active")
  ).map(function (option) {
    return {
      value: option.getAttribute("data-value_standard"),
      text: option.textContent.trim(),
    };
  });

  const selectedValuesStandard = selectionOptionsStandard.map(function (
    option
  ) {
    // console.log(option.value);
    return option.value;
  });
  // console.log(selectedValues);
  customSelect.querySelector(".tags_input_standard").value =
    selectedValuesStandard.join(", ");

  let tagsHTML = "";
  if (selectedValuesStandard.length === 0) {
    tagsHTML =
      '<p style="font-size: 14px" class="placeholder">Communication task standard...</p>';
  } else {
    const maxTagsToShow = 1;
    let additionalTagsCount = 0;

    selectionOptionsStandard.forEach(function (option, index) {
      if (index < maxTagsToShow) {
        tagsHTML += `<span style="font-size: 14px" class="tag">${option.text} <span class="remove-tag" data-value_standard="${option.value}">&times;</span></span>`;
      } else {
        additionalTagsCount++;
      }
    });
    if (additionalTagsCount > 0) {
      tagsHTML += `<span class="tag">+${additionalTagsCount}</span>`;
    }
  }
  customSelect.querySelector(".selected-options_standard").innerHTML = tagsHTML;
}

customSelectsStandard.forEach(function (customSelect) {
  const searchInputStandard = customSelect.querySelector(
    ".search-tags_standard"
  );
  const optionsContainerStandard =
    customSelect.querySelector(".options_standard");
  const optionsStandard = customSelect.querySelectorAll(".option_standard");
  const clearButton = customSelect.querySelector(".clear");

  clearButton.addEventListener("click", function () {
    searchInputStandard.value = "";
    optionsStandard.forEach(function (option) {
      option.style.display = "inline-block";
    });
  });

  searchInputStandard.addEventListener("input", function () {
    const searchTermStandard = searchInputStandard.value.toLowerCase();
    // console.log(searchTermStandard);
    optionsStandard.forEach(function (option) {
      console.log(option);

      const optionTextStandard = option.textContent.trim().toLowerCase();
      const shouldShowStandard =
        optionTextStandard.includes(searchTermStandard);
      option.style.display = shouldShowStandard ? "inline-block" : "none";
    });

    if (searchTermStandard) {
      optionsContainerStandard.classList.add("option-search-active");
    } else {
      optionsContainerStandard.classList.remove("option-search-active");
    }
  });
});

customSelectsStandard.forEach(function (customSelect) {
  const optionsStandard = customSelect.querySelectorAll(".option_standard");
  optionsStandard.forEach(function (option) {
    option.addEventListener("click", function () {
      option.classList.toggle("active");
      updateSelectedOptionsStandard(customSelect);
    });
  });
});

document.addEventListener("click", function (e) {
  const removeTag = e.target.closest(".remove-tag");
  // console.log(removeTag, "f");
  if (removeTag) {
    const customSelectStandard = removeTag.closest(".custom_select_standard");
    // console.log(customSelect, " a");
    const valueToRemoveStandard = removeTag.getAttribute("data-value_standard");
    const escapedValueStandard = CSS.escape(valueToRemoveStandard);

    const optionToRemoveStandard = customSelectStandard.querySelector(
      `.option_standard[data-value_standard="${escapedValueStandard}"]`
    );
    // console.log(optionToRemove, "c");
    optionToRemoveStandard.classList.remove("active");

    updateSelectedOptionsStandard(customSelectStandard);
  }
});

const selectBoxesStandard = document.querySelectorAll(".select-box_standard");
selectBoxesStandard.forEach(function (selectBox) {
  selectBox.addEventListener("click", function (e) {
    if (!e.target.closest(".tag")) {
      selectBox.parentNode.classList.toggle("open");
    }
  });
});

document.addEventListener("click", function (e) {
  if (
    !e.target.closest(".custom_select_standard") &&
    !e.target.classList.contains("remove-tag")
  ) {
    customSelectsStandard.forEach(function (customSelect) {
      customSelect.classList.remove("open");
    });
  }
});
updateSelectedOptionsStandard(customSelectsStandard[0]);

// nhấn tính tiền
const btnPricingCalculation = document.querySelector(".btn_submit");
commTaskSubSkill = data; // mảng đối tượng CommTask mới sẽ thêm các thông tin skill trùng
btnPricingCalculation.addEventListener("click", () => {
  // có thể dùng những biết toàn cục
  // sau khi bấm btn mới có value
  const tags = document.querySelector(".tags_input").value;

  const tagsStandard = document.querySelector(".tags_input_standard").value;

  const idSet = new Set(); // typeof object, lưu trữ những giá trị duy nhất không trùng lặp
  //Standard/////////////////////
  arrayCommTaskStandardUsed = tagsStandard.split(", ");
  const commTasksStandardUsed = data.filter(function (commTask) {
    // console.log(arrayIDCommTaskUsed)
    return arrayCommTaskStandardUsed.includes(commTask._id.$oid);
  });

  const commTaskSkillStandard = commTasksStandardUsed.map((commTask) => {
    // Tạo ra một bản sao của commTask với Skills được lọc
    return {
      ...commTask,
      Skills: commTask.Skills.filter(
        (skill) => !skill.id.includes("C1") && !skill.id.includes("C2")
      ),
    };
  });

  // Hiển thị đối tượng sau khi loại bỏ

  // Full Range -------------------------
  // string to array
  // array arrayIDCommTaskUsed chưa CommTask
  arrayIDCommTaskUsed = tags.split(", ");

  // arrayDataCommTaskUsed là mảng đối tượng  các commTask đã dùng
  const commTasksFullRangeUsed = data.filter(function (commTask) {
    // console.log(arrayIDCommTaskUsed)
    return arrayIDCommTaskUsed.includes(commTask._id.$oid);
  });

  const commTasksUsed = commTasksFullRangeUsed.concat(commTaskSkillStandard);
  // truy cập vào commTask và lấy ra bộ idSkill tương ứng với từng commTask
  commTasksUsed.forEach(function (commTask) {
    commTask.Skills.forEach(function (skill) {
      idSet.add(skill._id.$oid); // typeof object
    });
  });

  // console.log(idSet)

  //arr arrIDSkillCommUsed chứa các idSkill đã dùng không trùng lặp
  const arrIDSkillCommUsed = Array.from(idSet); // object => array
  // console.log(arrIDSkillCommUsed);

  let arrSkillsCommTask = [];
  let arrSkillCommTaskNew = []; // array id Skill không trùng của CommTask mới => sẽ tính tiền
  let arrSkillOverlapCommTaskNew = []; // array id Skill trùng của CommTask cũ
  dataNotOverlap = [];
  dataOverlap = [];

  commTaskSubSkill.forEach(function (commTaskSubSkill) {
    arrSkillsCommTask = [];
    arrSkillCommTaskNew = [];
    arrSkillOverlapCommTaskNew = [];

    // arrSkillsCommTask mảng id skill từng commTask trong
    //commTaskSubSkill truy cập vào Skills để lấy array ID Skill
    commTaskSubSkill.Skills.forEach(function (skill) {
      arrSkillsCommTask.push(skill._id.$oid);
    });

    //lọc ra những id không có trong commTask đã sữ dụng => tính tiền
    arrSkillCommTaskNew = arrSkillsCommTask.filter(
      (oidSkill) => !arrIDSkillCommUsed.includes(oidSkill)
    );

    //lọc ra những id skill trùng với commTask đã sữ dụng => không tính tiền
    arrSkillOverlapCommTaskNew = arrSkillsCommTask.filter((oidSkill) =>
      arrIDSkillCommUsed.includes(oidSkill)
    );

    const commTaskNotOverlap = [commTaskSubSkill].map((task) => {
      const filteredSkills = task.Skills.filter((skill) =>
        arrSkillCommTaskNew.includes(skill._id.$oid)
      );
      return {
        ...task,
        Skills: filteredSkills,
      };
    });

    insertCountSkill(commTaskNotOverlap);
    insertCalculateCostFullRange(commTaskNotOverlap, prices);
    insertCalculateCostStandard(commTaskNotOverlap, prices);
    // console.log(commTaskNotOverlap);
    if (commTaskNotOverlap[0].Skills.length !== 0) {
      dataNotOverlap.push(commTaskNotOverlap[0]);
    }
    // dataNotOverlap.push(commTaskNotOverlap[0]);

    const commTaskOverlap = [commTaskSubSkill].map((task) => {
      const filteredSkills = task.Skills.filter((skill) =>
        arrSkillOverlapCommTaskNew.includes(skill._id.$oid)
      );
      return {
        ...task,
        Skills: filteredSkills,
      };
    });

    insertCountSkill(commTaskOverlap);
    insertCalculateCostFullRange(commTaskOverlap, prices);
    insertCalculateCostStandard(commTaskOverlap, prices);
    dataOverlap.push(commTaskOverlap[0]);
  });
  // Tạo một CommsTaskUsed mới với Skills đã lọc
  // console.log(dataNotOverlap);
  idComm = [];
  emptyCommTask();
  loadCommTasks_v2(dataNotOverlap);

  idCommAfterSubmit = [];

  for (let i = 0; i < idComm.length; i++) {
    addCommTaskListener(idComm[i], data, dataOverlap, dataNotOverlap);
  }
});
const sortOrderSelect = document.getElementById("sortOrder");

sortOrderSelect.addEventListener("change", function () {
  const sortOrder = sortOrderSelect.value;

  const tasksToSort = dataNotOverlap.length !== 0 ? dataNotOverlap : data;

  const sortedTasks = tasksToSort.slice().sort((a, b) => {
    if (sortOrder === "alphabet") {
      return;
    } else if (sortOrder === "asc") {
      return a.costFullRange - b.costFullRange;
    } else if (sortOrder === "desc") {
      return b.costFullRange - a.costFullRange;
    } else if (sortOrder === "asc_Standard") {
      return a.costStandard - b.costStandard;
    } else if (sortOrder === "desc_Standard") {
      return b.costStandard - a.costStandard;
    }
  });

  loadCommTasks_v2(sortedTasks);
  for (let i = 0; i < idComm.length; i++) {
    addCommTaskListener(idComm[i], sortedTasks, dataOverlap, dataNotOverlap);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Get the logo element
  const logo = document.getElementById("logo");

  // Attach a click event listener to the logo
  logo.addEventListener("click", function () {
    // Reload the page
    location.reload();
  });
});
