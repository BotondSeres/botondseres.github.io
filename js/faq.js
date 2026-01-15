function toggleFAQItem(id) {
          const content = document.getElementById(`faqContent-${id}`);
          const arrow = document.getElementById(`arrow-${id}`);
          if (content.style.maxHeight == "0px") {
              content.style.maxHeight = content.scrollHeight + 'px';
              arrow.style.transform = "scaleY(-1)";
            } else {
              content.style.maxHeight = '0px';
              arrow.style.transform = "scaleY(1)";
          }
        }
        
        const  generalLink = document.getElementById("generalLink");
        const  generalList = document.getElementById("generalList");
        const programLink = document.getElementById("programLink");
        const programList = document.getElementById("programList");
        const faqGeneral = document.getElementById("faqGeneral");
        const faqProgram = document.getElementById("faqProgram");
        generalLink.addEventListener("click",(e)=>{
            e.preventDefault();
            programList.classList.remove("is-active");
            generalList.classList.add("is-active");
            faqGeneral.classList.remove("is-hidden");
            faqProgram.classList.add("is-hidden");
            
        });        
        programLink.addEventListener("click",(e)=>{
            e.preventDefault();
            generalList.classList.remove("is-active");
            programList.classList.add("is-active");
            faqProgram.classList.remove("is-hidden");
            faqGeneral.classList.add("is-hidden");
        });
