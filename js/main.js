var data = data.CommsTask;
// console.log(data);
const prices = {
  range6: 640000, //6
  range5: 560000, //5
  range4: 80000, //4
  range3: 50000, //3
  range2: 25000, //2
  range1: 0, //1
};
let arrayIDCommTaskUsed;
let idSet;
let arrIDSkillCommUsed;
let idComm = [];
let arrSkillCommSelected = [];

let commTaskSubSkill;

// Cost full range ()
function calculateCostFullRange(arrIDNewSkill, prices) {
  // console.log(arrIDNewSkill);
  const skillCounts = {
    range6: 0,
    range5: 0,
    range4: 0,
    range3: 0,
    range2: 0,
    range1: 0,
  };

  arrIDNewSkill.forEach((skill) => {
    if (skill.includes("C2")) {
      skillCounts.range6 += 1;
    }
    if (skill.includes("C1")) {
      skillCounts.range5 += 1;
    }
    if (skill.includes("B2")) {
      skillCounts.range4 += 1;
    }
    if (skill.includes("B1")) {
      skillCounts.range3 += 1;
    }
    if (skill.includes("A2")) {
      skillCounts.range2 += 1;
    }
    if (skill.includes("A1")) {
      skillCounts.range1 += 1;
    }
    if (
      skill === "P-L-5" ||
      skill === "P-L-6" ||
      skill === "P-L-8" ||
      skill === "P-L-13"
    ) {
      skillCounts.range3 += 1;
    }
    if (
      skill === "P-L-1" ||
      skill === "P-L-2" ||
      skill === "P-L-3" ||
      skill === "P-L-4" ||
      skill === "P-L-7" ||
      skill === "P-L-12" ||
      skill === "P-L-14"
    ) {
      skillCounts.range4 += 1;
      // console.log(skill);
    }
    if (skill === "P-L-9" || skill === "P-L-10" || skill === "P-L-11") {
      skillCounts.range5 += 1;
    }
  });

  // console.log(skillCounts);

  const skillPrices = [
    prices.range6,
    prices.range5,
    prices.range4,
    prices.range3,
    prices.range2,
    prices.range1,
  ];
  const costFullRange = Object.values(skillCounts).reduce(
    (totalCost, count, index) => totalCost + count * skillPrices[index],
    0
  );
  // const costStandar =
  // console.log(costFullRange);

  return costFullRange;
}
function calculateCostStandard(arrIDNewSkill, prices) {
  // console.log(arrIDNewSkill);
  const skillCounts = {
    range6: 0,
    range5: 0,
    range4: 0,
    range3: 0,
    range2: 0,
    range1: 0,
  };

  arrIDNewSkill.forEach((skill) => {
    if (skill.includes("C2")) {
      return;
    }
    if (skill.includes("C1")) {
      return;
    }
    if (skill.includes("B2")) {
      skillCounts.range4 += 1;
      // console.log(skill);
    }
    if (skill.includes("B1")) {
      skillCounts.range3 += 1;
    }
    if (skill.includes("A2")) {
      skillCounts.range2 += 1;
    }
    if (skill.includes("A1")) {
      skillCounts.range1 += 1;
    }
    if (
      skill === "P-L-5" ||
      skill === "P-L-6" ||
      skill === "P-L-8" ||
      skill === "P-L-13"
    ) {
      skillCounts.range3 += 1;
    }
    if (
      skill === "P-L-1" ||
      skill === "P-L-2" ||
      skill === "P-L-3" ||
      skill === "P-L-4" ||
      skill === "P-L-7" ||
      skill === "P-L-12" ||
      skill === "P-L-14"
    ) {
      skillCounts.range4 += 1;
      // console.log(skill);
    }
    if (skill === "P-L-9" || skill === "P-L-10" || skill === "P-L-11") {
      skillCounts.range5 += 1;
    }
  });

  // console.log(skillCounts);

  const skillPrices = [
    prices.range6,
    prices.range5,
    prices.range4,
    prices.range3,
    prices.range2,
    prices.range1,
  ];
  const costStandard = Object.values(skillCounts).reduce(
    (totalCost, count, index) => totalCost + count * skillPrices[index],
    0
  );
  // const costStandar =
  // console.log(costStandard);

  return costStandard;
}

function addCost(data) {
  data.forEach(function (objComm) {
    // create arrPricingCalculateCommTask = arr cua tu data
    arrPricingCalculateCommTask = [];
    objComm.Skills.forEach(function (skill) {
      arrPricingCalculateCommTask.push(skill.id); //push skill se dung de tinh tien
    });
    // console.log(arrPricingCalculateCommTask)

    const costFullRange = calculateCostFullRange(
      arrPricingCalculateCommTask,
      prices
    );
    // console.log(costFullRange);
    const costStandard = calculateCostStandard(
      arrPricingCalculateCommTask,
      prices
    );
    // console.log(costStandard);
    objComm.costFullRange = costFullRange;
    objComm.costStandard = costStandard;
  });
  // return objComm;
}
addCost(data);
// console.log(data); //data đã có tiền
// const Cost = calculateCost(data[0], prices);
// console.log(Cost)

// Đặt nội dung cho phần tử mới
var commTasksEl = document.getElementById("comm_tasks");
var optionsEl = document.querySelector(".options");

const loadCommTasks = (data) => {
  data.forEach(function (objComm) {
    idComm.push(objComm._id.$oid); // push id của commTask để làm id cho div 1 task
    // console.log(idComm, 'idcomm')
    // console.log(e)
    var newCommTask = `<div id ='${objComm._id.$oid}' class="desc-comp-offer">
    <div class="row desc-comp-offer-cont-pro">
      <div class="col-md-5 col-sm-12">
        <img
        style="height: 100px;"
          src="./img/navbar/logoAll.png"
          class="img-fluid img-center-block"
          alt="..."
        />
      </div>
      <div class="col-md-7 col-sm-12">
        <h3 class="name-CommTask"><b>${objComm.name}</b></h3>
        <p class="desc-CommTask">
        ${objComm.desc}
        </p>
        <div class="priceComm flex">
        <p>Full Range: ${objComm.costFullRange
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đ</p> 

        <p>Standard: ${objComm.costStandard
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đ</p> 
        </div>
      </div>
    </div>
    </div>`;

    // Thêm phần tử mới vào container
    commTasksEl.innerHTML += newCommTask;
  });
};
loadCommTasks(data);

// load option của thanh chọn CommTask đã dùng
const loadOptions = (data) => {
  data.forEach(function (e) {
    const result = e.name.slice(0, 4) + e.name.charAt(e.name.length - 1);
    var loadOption = `<div style="display: inline-block; 
    margin: 4px; "
    class="option" data-value="${result}">${e.name}</div>`;
    optionsEl.innerHTML += loadOption;
  });
};
loadOptions(data); // gọi lúc load trang lần đầu tiên

// var commTask1 = document.getElementById("commTask_1");
// var commTask2 = document.getElementById("commTask_2");
// var commTask3 = document.getElementById("commTask_3");
// var commTask4 = document.getElementById("commTask_4");
// var commTask5 = document.getElementById("commTask_5");
// var commTask6 = document.getElementById("commTask_6");
// var commTask7 = document.getElementById("commTask_7");
// var commTask8 = document.getElementById("commTask_8");
// var commTask9 = document.getElementById("commTask_9");
// var commTask10 = document.getElementById("commTask_10");
// var commTask11 = document.getElementById("commTask_11");
// var commTask12 = document.getElementById("commTask_12");
// var commTask13 = document.getElementById("commTask_13");
// var commTask14 = document.getElementById("commTask_14");
// var commTask15 = document.getElementById("commTask_15");
// var commTask16 = document.getElementById("commTask_16");
// var commTask17 = document.getElementById("commTask_17");
// var commTask18 = document.getElementById("commTask_18");
// var commTask19 = document.getElementById("commTask_19");
// var commTask20 = document.getElementById("commTask_20");
// var commTask21 = document.getElementById("commTask_21");
// var commTask22 = document.getElementById("commTask_");
// var commTask23 = document.getElementById("commTask_");
// var commTask24 = document.getElementById("commTask_");
// var commTask25 = document.getElementById("commTask_");

const emptyCommTask = () => {
  commTasksEl.innerHTML = "";
};

const addCommTaskListener = (id) => {
  const commTask = document.getElementById(`${id}`); // có 21 commTask được get làm Element

  if (commTask) {
    // nếu Click vào cái Element CommTask tương ứng
    commTask.addEventListener("click", () => {
      emptyCommTask(); // Xóa hết cái CommTask đã load trong data
      // chọn ra từ data lớn có commTask id tương ứng với id click chỉ có duy nhất 1 phần tử
      // filteredTasks là 1 mảng chứa 1 đối tượng commTask ví trí 0
      const filteredTasks = data.filter(
        (commTask) => commTask._id.$oid === `${id}`
      );
      // console.log(filteredTasks);
      loadCommTasks(filteredTasks);
      // reset arrSkill mà CommTask được chọn để mô tả CommTask
      arrSkillCommSelected = [];
      // truy cập vào mảng Skills của CommTask và lấy id của Skills trong CommTask đó và Push vô mảng
      // chưa các Skill để mô tả
      // arrSkillCommSelected - đi arr chứa id Skill đã học

      filteredTasks[0].Skills.forEach((skill) =>
        arrSkillCommSelected.push(skill.id)
      );
    });
  } else {
    console.error(`Element with ID '${id}' not found.`);
  }
};

for (let i = 0; i < idComm.length; i++) {
  console.log(i);
  console.log(idComm[i]);
  addCommTaskListener(idComm[i]);
}

// document.addEventListener("DOMContentLoaded", function () {
// Mã JavaScript bạn muốn thực thi khi DOM đã sẵn sàng
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
    tagsHTML = '<span class="placeholder">Select Comm Task đã dùng....</span>';
  } else {
    const maxTagsToShow = 2;
    let additionalTagsCount = 0;

    selectionOptions.forEach(function (option, index) {
      if (index < maxTagsToShow) {
        tagsHTML += `<span class="tag">${option.text} <span class="remove-tag" data-value = "${option.value}">&times;</span></span
            >`;
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
      const optionText = option.textContent.trim().toLocaleLowerCase();
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
    // console.log(valueToRemove, "b");
    const optionToRemove = customSelect.querySelector(
      `.option[data-value=${valueToRemove}]`
    );
    // console.log(optionToRemove, "c");
    optionToRemove.classList.remove("active");

    updateSelectedOptions(customSelect);
  }
});

//click selectbox thi open list selection
const selectBoxes = document.querySelectorAll(".select-box");
selectBoxes.forEach(function (selectBox) {
  selectBox.addEventListener("click", function (e) {
    if (!e.target.closest(".tag")) {
      selectBox.parentNode.classList.toggle("open");
    }
  });
});
// bam ra ngoai thi tat list select
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

function resetCustomSelects() {
  customSelects.forEach(function (customSelect) {
    customSelects.querySelectorAll(".option.active").forEach(function (option) {
      option.classList.remove("active");
    });
    customSelect.querySelector(".option").classList.remove(".active");
    updateSelectedOptions(customSelect);
  });
}
updateSelectedOptions(customSelects[0]);

// nhấn tính tiền
const btnPricingCalculation = document.querySelector(".btn_submit");
// bắt đầu trong hàm click
btnPricingCalculation.addEventListener("click", () => {
  // có thể dùng những biết toàn cục
  // sau khi bấm btn mới có value
  const tags = document.querySelector(".tags_input").value;
  const strIDCommTaskUsed = tags.replace(
    /COMM(\d+)/g,
    (_, num) => `COMMUNICATION TASK ${num}`
  );
  // console.log(strIDCommTaskUsed) //string COMMUNICATION TASK 1, COMMUNICATION TASK 2

  // string to array
  // array arrayIDCommTaskUsed chưa CommTask
  arrayIDCommTaskUsed = strIDCommTaskUsed.split(", ");
  // mảng chứa tên Comm Task đã dùng ['COMMUNICATION TASK 2'] => id CommTask

  // arrayDataCommTaskUsed là mảng đối tượng  các commTask đã dùng
  const arrayDataCommTaskUsed = data.filter(function (commTask) {
    return arrayIDCommTaskUsed.includes(commTask.name);
  });

  const idSet = new Set(); // typeof object, lưu trữ những giá trị duy nhất không trùng lặp
  // console.log(idSet)
  // truy cập vào commTask và lấy ra bộ idSkill tương ứng với từng commTask
  arrayDataCommTaskUsed.forEach(function (commTask) {
    commTask.Skills.forEach(function (skill) {
      idSet.add(skill.id); // typeof object
    });
  });
  // console.log(idSet)
  //arr arrIDSkillCommUsed chứa các idSkill đã dùng không trùng lặp
  const arrIDSkillCommUsed = Array.from(idSet); // object => array
  // console.log(arrIDSkillCommUsed);

  // chuẩn bị hiển thị Comm Task sau khi submit
  // sẽ render ra data mới
  // tạo data mới chứa data.commTask = 1 mảng chứa các object commTask cũ có
  // Skills cũ, idSkill đã học
  // idSkill trùng
  // idSkill mới dùng để tính tiền
  // emptyCommTask();
  // idCommAfterSubmit = [];
  commTaskSubSkill = data; // mảng đối tượng CommTask mới sẽ thêm các thông tin skill trùng

  commTaskSubSkill.forEach(function (commTaskSubSkill) {
    let arrSkillCommTaskNew = []; // array id Skill không trùng của CommTask mới => sẽ tính tiền
    let arrSkillOverlapCommTaskNew = []; // array id Skill trùng của CommTask cũ
    let arrSkillsCommTask = [];

    // từng commTask trong commTaskSubSkill truy cập vào Skills để lấy array ID Skill
    commTaskSubSkill.Skills.forEach(function (skill) {
      arrSkillsCommTask.push(skill.id);
    });
    // console.log(arrSkillsCommTask); // sau 1 vòng for commTaskSubSkill.Skills sẽ có arr Skills đó
    // hãy lấy arrSkillsCommTask trừ đi arrIDCommTaskUsed để ra arr arrSkillCommTaskNew =>=> sẽ tính tiền
    arrSkillCommTaskNew = arrSkillsCommTask.filter(
      (idSkill) => !arrIDSkillCommUsed.includes(idSkill)
    );
    //sau 1 for commTaskSubSkill.Skills sẽ có 1 arrSkillCommTaskNew mới
    // hãy push vô commTaskSubSkill

    arrSkillOverlapCommTaskNew = arrSkillsCommTask.filter((idSkill) =>
      arrIDSkillCommUsed.includes(idSkill)
    );
    //sau 1 for commTaskSubSkill.Skills sẽ có 1 arrPricingCalculateCommTaskOverlap mới
    // hãy push vô commTaskSubSkill

    // hãy tính tiền ở đây => push vô commTaskSubSkill
    const costFullRange = calculateCostFullRange(arrSkillCommTaskNew, prices);
    console.log(costFullRange);
    // // console.log(costFullRange);
    const costStandard = calculateCostStandard(arrSkillCommTaskNew, prices);
    console.log(costStandard);

    // push vo commTaskSubSkill
    commTaskSubSkill.arrSkillCommTaskNew = arrSkillCommTaskNew;
    commTaskSubSkill.arrSkillOverlapCommTaskNew = arrSkillOverlapCommTaskNew;
    commTaskSubSkill.costSubCommmTaskFullRange = costFullRange;
    commTaskSubSkill.costSubCommmTaskStandard = costStandard;
  });
  idCommAfterSubmit = [];
  const loadCommTasks = (dataSubSkill) => {
    emptyCommTask();
    dataSubSkill.forEach(function (objComm) {
      idCommAfterSubmit.push(objComm._id.$oid); // push id của dataSubSkill commTask để làm id cho div 1 task
      // console.log(idComm, 'idcomm')
      // console.log(e)
      var newCommTask = `<div id ='${objComm._id.$oid}' class="desc-comp-offer">
      <div class="row desc-comp-offer-cont-pro">
        <div class="col-md-5 col-sm-12">
          <img
          style="height: 100px;"
            src="./img/navbar/logoAll.png"
            class="img-fluid img-center-block"
            alt="..."
          />
        </div>
        <div class="col-md-7 col-sm-12">
          <h3 class="name-CommTask"><b>${objComm.name}</b></h3>
          <p class="desc-CommTask">
          ${objComm.desc}
          </p>
          <div class="priceComm flex">
          <p>Full Range: ${objComm.costSubCommmTaskFullRange
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đ</p> 
  
          <p>Standard: ${objComm.costSubCommmTaskStandard
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đ</p> 
          </div>
        </div>
      </div>
      </div>`;

      // Thêm phần tử mới vào container
      commTasksEl.innerHTML += newCommTask;
    });
  };
  loadCommTasks(commTaskSubSkill);

  const addCommTaskListener2 = (id) => {
    const commTask = document.getElementById(`${id}`);

    if (commTask) {
      // chọn ra từ data subtask có commTask id tương ứng với id click chỉ có duy nhất 1 phần tử
      commTask.addEventListener("click", () => {
        emptyCommTask();
        // filteredTasks là 1 mảng chứa 1 đối tượng commTask ví trí 0
        const filteredTasks = data.filter((task) => task._id.$oid === `${id}`);
        loadCommTasks(filteredTasks);
        
        arrSkillCommSelected = [];

        filteredTasks[0].Skills.forEach((e) => arrSkillCommSelected.push(e.id));
      });
    } else {
      console.error(`Element with ID '${id}' not found.`);
    }
  };
  for (let i = 0; i < idCommAfterSubmit.length; i++) {
    // console.log(i);
    // console.log(idComm[i])
    addCommTaskListener2(idCommAfterSubmit[i]);
  }
});

// Thêm sự kiện click cho phần tử
// commTask1.addEventListener("click", function () {
//   emtyCommTask()
//   const commID = "COMMUNICATION TASK 1";
//   detailCommTask(commID);
// });
// commTask2.addEventListener("click", function () {
//   emtyCommTask()
//   const commID = "COMMUNICATION TASK 2";
//   detailCommTask(commID);
// });
// commTask3.addEventListener("click", function () {
//   emtyCommTask()
//   const commID = "COMMUNICATION TASK 3";
//   detailCommTask(commID);
// });
// commTask4.addEventListener("click", function () {
//   emtyCommTask()
//   const commID = "COMMUNICATION TASK 4";
//   detailCommTask(commID);
// });
// commTask5.addEventListener("click", function () {
//   emtyCommTask()
//   const commID = "COMMUNICATION TASK 5";
//   detailCommTask(commID);
// });
// commTask6.addEventListener("click", function () {
//   emtyCommTask()
//   const commID = "COMMUNICATION TASK 6";
//   detailCommTask(commID);
// });
// commTask7.addEventListener("click", function () {
//   emtyCommTask()
//   const commID = "COMMUNICATION TASK 7";
//   detailCommTask(commID);
// });
// commTask8.addEventListener("click", function () {
//   emtyCommTask()
//   const commID = "COMMUNICATION TASK 8";
//   detailCommTask(commID);
// });
// commTask9.addEventListener("click", function () {
//   emtyCommTask()
//   const commID = "COMMUNICATION TASK 9";
//   detailCommTask(commID);
// });
// commTask10.addEventListener("click", function () {
//   emtyCommTask()
//   const commID = "COMMUNICATION TASK 10";
//   detailCommTask(commID);
// });
// commTask11.addEventListener("click", function () {
//   emtyCommTask()
//   const commID = "COMMUNICATION TASK 11";
//   detailCommTask(commID);
// });
// commTask12.addEventListener("click", function () {
//   emtyCommTask()
//   const commID = "COMMUNICATION TASK 12";
//   detailCommTask(commID);
// });
// commTask13.addEventListener("click", function () {
//   emtyCommTask()
//   const commID = "COMMUNICATION TASK 13";
//   detailCommTask(commID);
// });
// commTask14.addEventListener("click", function () {
//   emtyCommTask()
//   const commID = "COMMUNICATION TASK 14";
//   detailCommTask(commID);
// });
// commTask15.addEventListener("click", function () {
//   emtyCommTask()
//   const commID = "COMMUNICATION TASK 15";
//   detailCommTask(commID);
// });
// commTask16.addEventListener("click", function () {
//   emtyCommTask()
//   const commID = "COMMUNICATION TASK 16";
//   detailCommTask(commID);
// });
// commTask27.addEventListener("click", function () {
//   emtyCommTask()
//   const commID = "COMMUNICATION TASK 17";
//   detailCommTask(commID);
// });
// commTask28.addEventListener("click", function () {
//   emtyCommTask()
//   const commID = "COMMUNICATION TASK 18";
//   detailCommTask(commID);
// });
// commTask29.addEventListener("click", function () {
//   emtyCommTask()
//   const commID = "COMMUNICATION TASK 19";
//   detailCommTask(commID);
// });
// commTask20.addEventListener("click", function () {
//   emtyCommTask()
//   const commID = "COMMUNICATION TASK 20";
//   detailCommTask(commID);
// });
// commTask21.addEventListener("click", function () {
//   emtyCommTask()
//   const commID = "COMMUNICATION TASK 21";
//   detailCommTask(commID);
// });
