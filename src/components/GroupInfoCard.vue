<template>
    
<h1 class="text-center" >Why do you want to learn a new language?</h1>

   <div class="group-card-container">
    <div class="group-card">
        <img src="@/assets/InterestTravelers.png" alt="Leisure Travelers" style="width:100%">
        <div class="container">
            <h2><b>Leisure Travelers</b></h2> 
            <p>Learn essential phrases to feel confident, connect with locals, and navigate new places with ease.</p> 
            <router-link to="/levels">
              <button class="groupinfo-btn">Start Learning</button>
            </router-link>
        </div>
    </div>

    <div class="group-card">
        <img src="@/assets/BusinessTravelers.png" alt="Business Travelers" style="width:100%">
        <div class="container">
            <h2><b>Business Travelers</b></h2> 
            <p>Build practical language skills for meetings, networking, and frequent international travel.</p> 
            <router-link to="/levels">
              <button class="groupinfo-btn">Start Learning</button>
            </router-link>
        </div>
    </div>

    <div class="group-card">
        <img src="@/assets/DigitalNomads.png" alt="Digital Nomads" style="width:100%">
        <div class="container">
            <h2><b>Digital Nomads</b></h2> 
            <p>Develop deeper language skills to integrate, work remotely, and thrive abroad long-term.</p> 
            <router-link to="/levels">
              <button class="groupinfo-btn">Start Learning</button>
            </router-link>
        </div>
    </div>


    <div class="group-card">
        <img src="@/assets/LanguageLearners.png" alt="Language Enthusiasts" style="width:100%">
        <div class="container">
            <h2><b>Language Enthusiasts</b></h2> 
            <p>Learn a new language for personal growth, curiosity, and the joy of communication.</p> 
            <router-link to="/levels">
              <button class="groupinfo-btn">Start Learning</button>
            </router-link>
        </div>
    </div>
   
    <div class="group-card">
        <img src="@/assets/TravelingCompanies.png" alt="Traveling Companies" style="width:100%">
        <div class="container">
            <h2><b>Traveling Companies</b></h2> 
            <p> Support employees with structured language training for smoother international operations.</p> 
            <router-link to="/levels">
              <button class="groupinfo-btn">Start Learning</button>
            </router-link>
        </div>
    </div>
   
    <div class="group-card">
        <img src="@/assets/EducationalInstitutions.png" alt="Educational Institutions" style="width:100%">
        <div class="container">
            <h2><b>Educational Institutions</b></h2> 
            <p>Offer travelers language support to improve confidence and customer experience abroad.</p> 
            <router-link to="/levels">
              <button class="groupinfo-btn">Start Learning</button>
            </router-link>
        </div>
    </div>

    <div class="group-card">
        <img src="@/assets/TourismAgencies.png" alt="Tourism Agencies" style="width:100%">
        <div class="container">
            <h2><b>Tourism Agencies</b></h2> 
            <p>Offer travelers language support to improve confidence and customer experience abroad.</p> 
            <router-link to="/levels">
              <button class="groupinfo-btn">Start Learning</button>
            </router-link>
        </div>
    </div>

    <div class="group-card">
        <img src="@/assets/Financiers.png" alt="Financiers" style="width:100%">
        <div class="container">
            <h2><b>Financiers</b></h2> 
            <p>Invest in scalable language solutions designed for a global, mobile audience.</p> 
            <router-link to="/levels">
              <button class="groupinfo-btn">Start Learning</button>
            </router-link>
        </div>
    </div>

    <div class="group-card">
        <img src="@/assets/MarketingDepartment.png" alt="Marketing Department" style="width:100%">
        <div class="container">
            <h2><b>Marketing Department</b></h2> 
            <p>Leverage insights and user engagement tools to reach international markets effectively.</p> 
            <router-link to="/levels">
              <button class="groupinfo-btn">Start Learning</button>
            </router-link>
        </div>
    </div>
  </div>

</template>

<script>
</script>

<style scoped>

.group-card-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 27px;
  margin-top: 40px;
  margin-bottom: 100px;              
}

.group-card {
  width: 25%; 
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.6s;
  border-radius: 10px;
}
.group-card:hover {
  box-shadow: 0 10px 20px 0 rgba(6, 43, 78, 0.85);
}

.groupinfo-btn{
  background-color: #C05500;
  color: white;
  padding: 10px 18px;
  border: none;
  border-radius: 8px;
  margin-bottom: 20px;
}

.groupinfo-btn:hover{
  background-color: #A84A00;
}

@media (max-width: 900px) {
  .group-card {
    width: calc(50% - 20px);  
  }
}


@media (max-width: 600px) {
  .group-card {
    width: 95%;             
  }
}
</style>