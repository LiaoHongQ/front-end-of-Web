let sfq_all=document.querySelectorAll('.sfq1')
let sfq1_span=document.querySelector('.sfq_header')
let explain_word=document.querySelector('.sfq_explain')
let head_array=['全国大学生诗词大会','华为开发者联盟学堂系列课程','第三届——商务英语翻译挑战赛','全国大学生宪法知识竞赛']
let explain_arr=['为深入贯彻落实总书记在党的二十大报告中特别指出的“传承中华优秀传统文化”的理念，为激发全体师生关注经典、传承经典的热情，培养赏析和诵读中华诗词的兴趣，提高传承与弘扬中华优秀传统文化的自觉性，养成阅读和积累的习惯，现“华夏文化促进会素质教育委员会”在民政部登记、中国文学艺术界联合会主管的华夏文化促进会的指导下，面向全国大学生举办“2023 全国大学生诗词大会”。','为了让零基础学习者快速入门和具有前端开发经验者无缝切换到HarmonyOS应用程序开发，为此华为开发者联盟学堂推出了免费公开课程：<br>注：点击下方链接，注册成为学堂成员，领取第一手免费课程资源！<br>学习后考取华为官方认证权威证书！<br>大厂offer轻松拿！详细报名参考流程：<a href="https://www.saikr.com/c/nd/13823">https://www.saikr.com/c/nd/13823</a>','为探索商务英语专业以赛促教、以赛促学的途径与方法，培养院校学生商务翻译能力和相关职业素养，搭建专业建设交流和学生风采展示平台，“ 中国对外贸易经济合作企业协会”经研究决定举办全国性大赛—— 第三届全国高校商务翻译（英语）能力挑战赛。','&nbsp;&nbsp;&nbsp;&nbsp;宪法是国家的根本大法。党的二十大报告提出“坚持全面依法治国，推进法治中国建设，完善以宪法为核心的中国特色社会主义法律体系”。习总书记曾言：“大学生是祖国美好的未来，光明的未来”。大学生学习宪法，可以提高法律意识，增强爱国意识，维护自身权利和积极履行义务，更好地投入到社会主义法治建设中。<br>&nbsp;&nbsp;&nbsp;&nbsp;为此，呼吁各高校做好报名与组织工作，建议将本次竞赛获奖成绩作为高校综合素质测评及相关加分的参考依据。']
for(let i=0;i<4;i++){
    sfq_all[i].addEventListener('mouseover',function(){
        sfq1_span.innerHTML=head_array[i]
        explain_word.innerHTML=explain_arr[i]
    })
}
let browser_width=window.innerWidth
let hiden=document.querySelector('.sfq_word')
if(window.innerWidth<browser_width*0.9){
    hiden.style="display:none"
}

