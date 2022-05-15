<template>
  <v-container>
      <v-row class="mt-2">
        <v-col>
          <v-row class="">
            Technicals <!-- <v-chip x-small class="mt-1 ml-1">All</v-chip> -->
          </v-row>
          <v-row class="mt-3" v-for="(value, key) in technicals" :key="key">
            {{key}} : <v-chip class="mt-1 ml-1" x-small v-for="(item, index) in value" :key="index">{{item}}</v-chip>
          </v-row>
        </v-col>
      </v-row>
      <v-row class="mt-5" align="left">
        <v-card v-for="(item, index) in projects" :key="index"
          class="mx-auto mt-1"
          max-width="280px"
          outlined
        >
          <v-img
            v-if="item.thumbnail.length>0"
            v-bind:src="item.thumbnail[0]"
            height="200px"
            style="cursor:pointer;"
            @click="popup(item)"
          ></v-img>
          <v-card-text>
            <p class="subtitle-1 text--primary font-weight-black">
              {{item.title}}
            </p>
            <div class="text--primary">
              {{item.desc}}
            </div>
            <v-chip x-small class="mr-1" v-for="(item2, index2) in item.tags" :key="index2">
              {{item2}}
            </v-chip>
          </v-card-text>
        </v-card>
      </v-row>
      <v-overlay
        z-index="9"
        :value="overlay"
        @click.native="overlay = false"
      >
        <v-img
          z-index="10"
          contain
          height="500px"
          :src="overlayImage"
        ></v-img>
      </v-overlay>
</v-container>
</template>

<script>
//포트폴리오 참고 http://findmatthew.com/
export default{
  methods:{
    popup(item){
      this.overlay = true;
      this.overlayImage = item.image[0];
    },
  },
  data(){
    return {
      overlay:false,
      overlayImage:'',
      technicals:{
        "Language" : ["C", "C#", "Java", "PHP", "Python", "JavaScript", "TypeScript", "SQL"],
        "Framework" : ["Spring", ".NET(C#)", "Node.js", "Ionic", "Vue.js"],
        "Etc" : ["React-native", "Android", "Jenkins", "Tmax"],
      },
      projects:[
        {
          title:"memo (toy project)",
          desc:"https://bsc-toy.herokuapp.com/#/memo. This web application is based by vue.js. You can note everything and notes are categorized. "
              +"It support create / delete / list notes. In addition, periodically(yearly / montly / weekly / daily) notes are available."
              +"When you insert periodically memo and check the memo, it will appear at next period.",
          tags:["Vue.js","PHP", "TypeScript"],
          image:['/projects/memo.png'],
          thumbnail:['/projects/thumbnail/thumbnail_memo.png'],
        },
        {
          title:"scsoft android app (2019.06~2021.12)",
          desc:"https://play.google.com/store/apps/developer?id=scsoft. Developed and published 4 apps of scsoft : Stock Miner, Tag Note, Simple Ledger, Country Flag Quiz."
          + " Each apps were made by ionic framework. Some apps are Vue.js based, some apps are Angular.js based.",
          tags:["Ionic","Vue.js","Angular.js", "JavaScript"],
          image:['/projects/scsoft_android.png'],
          thumbnail:['/projects/thumbnail/thumbnail_scsoft_android.png'],
        },
        {
          title:"Samsung Electronics EES UI 2.0 Client / Webserver (2017.08~)",
          desc:"In Samsung Electronics (semiconductor), my job is maintaining MES-EES(Equipment Engineering System) Client / Web server. "
          + "Have made each module's UI. (Recipe Management System, Fault Detection System, Process Control System, etc)"
          +"Plus, developed Software load Balnacer that is not using H/W Load Balancer, improved chart render performance (over 90% speed up) by algorithm utilization,"
          +" introduced DevOps : Git, Jenkins, Crucible/Fisheye, Jira. In order to patch and verify patch/setup system, I developed patch script and program.",
          tags:["WCF","WPF","C#(.NET)"],
          image:[],
          thumbnail:[],
        },
        {
          title:"TmaxSoft Sysmaster (2016.02~2017.06)",
          desc:"When I was in Tmaxsoft / TmaxCloud corporation, I was member of 'Sysmaster' APM solution.(Application Performance Management.)"
            +"My job is made / maintain Data collector module which measure server / webtoB(webserver), tmax(TP monitor), proframe(tmax framework),"
            +"Oracle(DB), Anylink(interface framework) and send data to central server."
            +" Developed in unix environment(HPUX, Linux, AIX, Solaris) by using C or Java programming."
            +" Experienced POSIX system call, concurrent program, multi thread-process architecture, socket programming, "
            +"IPC(file, pipe, signal, shared memory), etc.",
          tags:["C", "Java"],
          image:['/projects/sysmaster.gif'],
          thumbnail:['/projects/thumbnail/thumbnail_sysmaster.png'],
        },
        {
          title:"Korea University Open API (2015.12~2016.02)",
          desc:"In Korea University Information and Computing Office, I participated in developing Korea University Open API. "
          + "Because most members didn't know about spring/mybatis, I taught spring / mybatis / MVC pattern."
          + " And I made architecture of open API base and developed common code.",
          tags:["Spring","Mybatis", "Java"],
          image:['/projects/koreauniv_openapi.png'],
          thumbnail:['/projects/thumbnail/thumbnail_koreauniv_openapi.png'],
        },
        {
          title:"Low fertility and Aging society web site (2015.01~2015.06)",
          desc:"This website is based on korea - egov framework (fork from spring framework)."
                +"I participated in this project as Backend programmer and frontend javascript programmer."
                +"developed Member function(register, withdrawl, modification)," 
                +"Board function(view, modify, write, delete, reply, attach file). "
                +"In order to make many boards, I generalized several codes / classes and designed by using design pattern."
                +"Additional, I participated in front-end javascript programmer for devloping api communicaion and front end action/animation",
          tags:["Spring","Mybatis", "Java", "Javascript"],
          image:['/projects/precap.png'],
          thumbnail:['/projects/thumbnail/thumbnail_precap.png'],
        },
        {
          title:"Qplace (2013.06~2014.08)",
          desc:"Qplace was restaurant recommend application. I participated in developed in Android application, and developed IOS application ported from Android app."
          + "In addition, I developed tools for user action analysis system by using PHP and HTML, Javascript, Bootstrap. ",
          tags:["Android", "objective-c", "PHP", "Javascript"],
          image:['/projects/qplace.png'],
          thumbnail:['/projects/thumbnail/thumbnail_qplace.png'],
        },
        {
          title:"RapaEdu (2013.06~08)",
          desc:"Rapaedu is company that provide video lecture. I developed homework / review feature in this company by using APS.NET, SQL, front-end."
            +" Also, maintained all of this company's website and web server and DB.",
          tags:["ASP.NET", "SQL", "Javascript"],
          image:['/projects/rapaedu.png'],
          thumbnail:['/projects/thumbnail/thumbnail_rapaedu.png'],
        },
        {
          title:"Gomav (2013.06~07)",
          desc:"recommend friend's gift website. Developed website (server / client)",
          tags:["PHP", "Javascript"],
          image:['/projects/gomav.png'],
          thumbnail:['/projects/thumbnail/thumbnail_gomav.png'],
        },
        {
          title:"Autocall System (2013.04~08)",
          desc:"Developed website and android application. First, insert telephone number of people into DB by website."
            +" After then, User using android app can call each person automatically by communicating with web server.",
          tags:["PHP", "SQL", "Javascript", "Java","Android"],
          image:['/projects/autocall_app.jpg'],
          thumbnail:['/projects/thumbnail/thumbnail_autocall_app.png'],
        },
        {
          title:"Hyundai Steel BFG system (2013.02~03)",
          desc:"Developed simulation UI program calculating gas / fluid values by Using 'Flow Master' C# library.",
          tags:["C#"],
          image:['/projects/BFG system.png'],
          thumbnail:['/projects/thumbnail/thumbnail_BFG system.png'],
        },
        {
          title:"Hantech Media History Management System (2012.11~12)",
          desc:"Developed server / client side by using Spring Framework, MyBatis, MSSQL",
          tags:["Spring", "Java", "Mybatis", "SQL", "Javascript"],
          image:['/projects/HTM HMS.png'],
          thumbnail:['/projects/thumbnail/thumbnail_HTM HMS.png'],
        },
        {
          title:"Korea University IRB mobile web (2012.09~10)",
          desc:"Developed some pages of server side logic by using spring framework, ibatis.",
          tags:["Spring","Java", "Mybatis", "SQL"],
          image:['/projects/koreauniv_irb.png'],
          thumbnail:['/projects/thumbnail/thumbnail_koreauniv_irb.png'],
        },
        {
          title:"Korea University Brain dept. websites (2012.02~03, 2015.03~06)",
          desc:"made / designed / maintained SMC2012, Werob2015, BEC2015 websites.",
          tags:["Javascript"],
          image:['/projects/smc2012.png'],
          thumbnail:['/projects/thumbnail/thumbnail_smc2012.png'],
        },
        {
          title:"GameSS (2011.02~)",
          desc:"GameSS (www.gamess.co.kr) is Korean Game community site having 2 million members. I have been Technical Engineer since 2011."
            +" Developed social network(user's home, board, like, point, etc functions) and maintain servers.",
          tags:["Javascript","PHP"],
          image:['/projects/gamess.png'],
          thumbnail:['/projects/thumbnail/thumbnail_gamess.png'],
        },
      ]
    }
  }
}
</script>
