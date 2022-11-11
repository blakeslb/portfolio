
let projects = document.querySelectorAll('.project')
// console.log(projects);


// all
// wordpress
//front-end
//app
//event listeners for each filter
//if filter is clicked, hide everything that is not that filter 

//store variables for event listeners
let filter1 = document.querySelector('#wordpress')
let filter2 = document.querySelector('#app')
let filter3 = document.querySelector('#front-end')
let filter4 = document.querySelector('#all')
let filters = [filter1, filter2, filter3, filter4]

//function to change active filter style
const changeActive = (currentActive) =>{
        filters.forEach(filter => {
                filter.classList.remove('active');
        })
        currentActive.classList.add('active');
}

filter1.addEventListener('click', checkProjects => {
       
        changeActive(filter1);

        projects.forEach(project => {
                if (project.classList.contains('wordpress') == false) {
                        project.classList.add('hidden');
                        project.classList.remove('show');

                }
                else {
                        project.classList.remove('hidden');
                        project.classList.add('show');
                }
        })
});
filter2.addEventListener('click', checkProjects => {

        changeActive(filter2);

        projects.forEach(project => {
                if (project.classList.contains('app') == false) {
                        project.classList.add('hidden');
                        project.classList.remove('show');

                }
                else {
                        project.classList.remove('hidden');
                        project.classList.add('show');
                }
        })
});
filter3.addEventListener('click', checkProjects => {

        changeActive(filter3);

        projects.forEach(project => {
                if (project.classList.contains('front-end') == false) {
                        project.classList.add('hidden');
                        project.classList.remove('show');

                }
                else {
                        project.classList.remove('hidden');
                        project.classList.add('show');
                }
        })
});
filter4.addEventListener('click', checkProjects => {
        projects.forEach(project => {

                changeActive(filter4);


                project.classList.remove('hidden');
                project.classList.add('show');
        })
});



