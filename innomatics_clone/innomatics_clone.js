const expert = document.querySelector('.js-but1');
const cap = document.querySelector('.js-but2');
const project = document.querySelector('.js-but3');
const place = document.querySelector('.js-but4');
expert.addEventListener('click', () => {
    document.querySelector('.content').innerHTML = 
        `<img class="inno" src="https://www.innomatics.in/wp-content/uploads/2024/12/WEB-IMAGE-1.png">
            <div class="info">
                <p>Innomatics explored all over India to get the best trainers 
                and succeeded with it. We have a pool of trainers working 
                with highly qualified business partners and fortune companies
                to provide advanced and comprehensive training. </p>

                <p> They curate the course content with an eye on the industry 
                needs and standards to make students skilful and champions 
                in solving the complex challenges of the industry.</p>
            </div>`;
            document.querySelector('.one').innerHTML = ``;
});
cap.addEventListener('click', () => {
    document.querySelector('.content').innerHTML = 
    ` <img class="inno" src="http://innomatics.in/wp-content/uploads/2023/01/Live-Projects.png">
            <div class="info">
                <p>At Innomatics, we believe in a practical learning approach. 
                    Making students work on real-time data helps in giving them 
                    a clear visualization of how it is applied in the real world. </p>

                <p> Considering this, we follow a collaborative
                    group-oriented approach to learn with discussion
                    forums and get hands-on with capstone projects to 
                    make our trainees good team players and strong 
                    thinkers to solve problems.</p>
            </div>`;
            document.querySelector('.one').innerHTML = ``;
});
project.addEventListener('click', () => {
    document.querySelector('.content').innerHTML = 
    ` <img class="inno" src="http://innomatics.in/wp-content/uploads/2023/01/In-House-Internship.jpg">
            <div class="info">
                <p>Internships aren’t just about ground work at Innomatics. 
                    We believe that with the right program, One can develop
                    young talents and lay a foundation for recruiting 
                    brilliant young minds to work for any organization.</p>

                <p> We do provide paid/unpaid internship programs that 
                    offer the opportunity to edge out larger competitors 
                    by providing interns with opportunities to conquer the 
                    business challenges.</p>
            </div>`;
            document.querySelector('.one').innerHTML = ``;
});
place.addEventListener('click', () => {
    document.querySelector('.content').innerHTML = 
    `<img class="inno" src="http://innomatics.in/wp-content/uploads/2023/01/Placement-Assistance.jpg">
            <div class="info">
                <p>We have a collaboration with over 100+ MNCs and SMEs who 
                    directly source their business requirements through Innomatics. 
                    Also having a dedicated placement verticle that enables trainees 
                    to take advantage and excel in the career with extensive knowledge 
                    gained at Innomatics.</p>

                <p> For the benefit of the students to face the real challenges, 
                    we conduct mockup interviews with instant feedback,1-1 mentorship, 
                    provide extensive support to the Learning Management System
                    (LMS) where they can access the classes and stay updated, 
                    attend career fairs, Hackathons, workshops and meetups with leading 
                    industry experts.</p>
            </div>`;
            document.querySelector('.one').innerHTML = ``;
});

document.querySelector('.page1').addEventListener('click', () => {  
document.querySelector('.reviews').innerHTML = 
`<h2>Here are some of our stories</h2>
<img src="https://www.innomatics.in/wp-content/uploads/2024/11/Aaesha_Azeemuddin-400x516.jpg">
            <img src="https://www.innomatics.in/wp-content/uploads/2024/11/Alladi_Ranjith-400x516.jpg">
            <img src="https://www.innomatics.in/wp-content/uploads/2024/11/Cherukupalli_Indhu-400x516.jpg">
            <img src="https://www.innomatics.in/wp-content/uploads/2024/11/G._Venkata_Mareswararao-400x516.jpg">`;
})
document.querySelector('.page2').addEventListener('click', () => {  
    document.querySelector('.reviews').innerHTML = 
    `<h2>Here are some of our stories</h2>
    <img src="https://www.innomatics.in/wp-content/uploads/2024/11/Guruprasad_Madhusudhan_Kamtam-400x516.jpg">
            <img src="https://www.innomatics.in/wp-content/uploads/2024/11/P_Sri_Harsha-400x516.jpg">
            <img src="https://www.innomatics.in/wp-content/uploads/2024/11/Parla_Ram_Charan-400x516.jpg">
            <img src="https://www.innomatics.in/wp-content/uploads/2024/11/Venkata_Surya_Vishal_Ganti-400x516.jpg">`;
    })
