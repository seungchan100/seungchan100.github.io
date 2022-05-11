<template>
  <v-container class="mt-10 pl-10 pr-10" style="border:solid #666;border-width:8px 0 0 0">
      <v-row class="pt-5 pb-5">
        <v-col cols="8" class="pl-5">
          <v-row class="text-h4">SeungChan baek</v-row>
          <v-row class="text-h7">Software Engineer</v-row>
        </v-col>
        <v-col cols="4">
            <br/>
            seungchan.100@gmail.com
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row class="pt-5 pb-5">
        <v-col cols=2 class="text-h7 font-italic font-weight-bold">
          Profile
        </v-col>
        <v-col class="md-8" cols=10>
          Software engineer at Samsung Electronics. <br>
          Experienced various software develop environment(desktop app, web, mobile, etc) since 2010. <br>
          Not only Interested in Programming, but also DevOps, Refactoring, and Finance.
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <!-- <v-row class="pt-5 pb-5">
        <v-col cols=2 class="text-h7 font-italic font-weight-bold" style="word-break:break-word;">
          Skills
        </v-col>
        <v-col cols=3>
          <p class="text-h7 font-weight-bold">Programming</p>
          I can make Application program in Unix,  Windows,  Web, and Mobile environment.
          Having various knowledge and experiences of OS/Web. Also having basic skill about mobile programming.
        </v-col>
        <v-col cols=3>
          <p class="text-h7 font-weight-bold">Software Design</p>
          I have ability to design software considering various develop environment by using data structures, algorithms
          and illustrate by using diagrams (Sequence Diagram, ER Diagram, etc.)
          Having UX-friendly design ability and communication skills for clients.
        </v-col>
        <v-col cols=3>
          <p class="text-h7 font-weight-bold">Analyze Legacy System</p>
          I have been participated in maintenance of legacy softwares.
          In order to fix bugs and improve systems, can analyze by using some debug / profiling software like dbx, gdb, wireshark, etc.
          Also, I have knowledge of operating systems, network, security.
        </v-col>
      </v-row> -->

      <v-row class="pt-5 pb-5">
        <v-col cols=2 class="text-h7 font-italic font-weight-bold" style="word-break:break-word;">
          Skills
        </v-col>
        <v-col cols=10>
          <v-row>
            <v-col>
              <v-row class="font-weight-bold text-h7">
                Programming
              </v-row>
              <v-row class="pt-1 text-body-2" style="width:100%">
                I can make Application program in Unix, Windows, Web, and Mobile environment. Having various knowledge and experiences of OS/Web. Also having basic skill about mobile programming.
              </v-row>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-row class="font-weight-bold text-h7" style="margin-top:5px">
                Software Design
              </v-row>
              <v-row class="pt-1 text-body-2" style="width:100%">
                I have ability to design software considering various develop environment by using data structures, algorithms and illustrate by using diagrams (Sequence Diagram, ER Diagram, etc.) Having UX-friendly design ability and communication skills for clients.
              </v-row>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-row class="font-weight-bold text-h7" style="margin-top:5px">
                Analyze Legacy System
              </v-row>
              <v-row class="pt-1 text-body-2" style="width:100%">
                I have been participated in maintenance of legacy softwares. In order to fix bugs and improve systems, can analyze by using some debug / profiling software like dbx, gdb, wireshark, etc. Also, I have knowledge of operating systems, network, security.
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-divider></v-divider>
      <v-row class="pt-5 pb-5">
        <v-col cols=2 class="text-h7 font-italic font-weight-bold" style="word-break:break-word;">
          Technicals
        </v-col>
        <v-col cols=10>
          <v-row>
            <span class="font-weight-bold">Language</span> : C, C#, Java, Javascript, PL/SQL, PHP, Python
          </v-row>
          <v-row>
            <span class="font-weight-bold">Framework</span> : Spring, Mybatis, .NET(C#), Node.js, Ionic, Vue.js, Nuxt.js
          </v-row>
          <v-row>
            <span class="font-weight-bold">etc</span> : Windows/Linux server maintenance, React-native, Jenkins, Git, Tmax, Tomcat, httpd
          </v-row>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row class="pt-5 pb-5">
        <v-col cols=2 class="text-h7 font-italic font-weight-bold" style="word-break:break-word;">
          Experience
        </v-col>
        <v-col cols=10>
          <v-row v-for="(item, index) in experience"
            :key="index"
            v-bind:class="{'pt-1':true, 'pb-2':true, 'border-bottom':index != experience.length-1}">
            <v-col>
              <v-row class="font-weight-bold text-h7">
                {{item.company}}
              </v-row>
              <v-row class="text-caption mt-2">
                {{item.title}}
              </v-row>
              <v-row class="pt-1 text-body-2" >
                <span v-for="(item2, index2) in item.description" :key="index2" style="width:100%">
                - {{item2}}
                </span>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row class="pt-5 pb-5">
        <v-col cols=2 class="text-h7 font-italic font-weight-bold" style="word-break:break-word;">
          Education
        </v-col>
        <v-col cols=10>
          <v-row>
            <v-col>
              <v-row class="font-weight-bold text-h7">
                Korea University (Seoul, Korea)
              </v-row>
              <v-row class="text-caption mt-2">
                Bachelor of Computer Science (2010.03~2016.02)
              </v-row>
              <v-row class="pt-1 text-body-2">
                <span>- Member of Kweb(web programming club) and chairman at 2012 and studied about HTML / CSS / Javscript / PHP / MySQL / Webservers.</span>
                <span>- Learned : Artificial Intelligence, Data Science, Distributed System, DataBase System, Operating System, Compiler, Data Communication, etc.</span>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row class="pt-5 pb-5">
        <v-col cols=2 class="text-h7 font-italic font-weight-bold">
          Projects
        </v-col>
        <v-col cols=10>
          <v-btn to="/projects" block>link</v-btn>
        </v-col>
      </v-row>

</v-container>
</template>

<style>
.border-bottom:{
  border-bottom:1px solid rgba(0,0,0,0.12);
}
</style>

<script>
export default {
  data() {
    return {
      experience:[
        {
          company:'Samsung Electronics',
          title : 'Software Engineer (2017.08~)',
          description:[
            'Participated in maintenance and improvement of EES (Equipment Engineering System, Semiconductor Equipment Management System).'
            ,'Developed and Designed new features of EES Client program and Web server by C#(.NET, WCF, WPF).'
            ,'Implement Non-Failover by using distributed system algorithms.'
            ,'Improvement chart rendering performance (90% improvement on 1 million data)'
            ,'Samsung Software Certification - Professional grade(2018.12)'
            ,'Best Reviewer(code reviewer) certification (2021.10)'
          ]

        },
        {
          company:'TmaxSoft/TmaxCloud',
          title:'Software Engineer (2016.02~2017.06)',
          description:
            [
              'Developed, designed data collector module of APM(Application Performance Management) Solution.'
              ,'Experienced in programming multi-therad programming / IPC (file, signal, socket, shared memory, etc) on HPUX, AIX, Solaris, Linux.'
            ]
        },
        {
          company:'Gamess',
          title : 'Technical Engineer (2011.02~)',
          description : [
            'Gamess is game community website(gamess.co.kr) having about 2 million members.'
            ,'Participated in developing Gamess, I developed membership features (user home, like, friend, login, etc) by using PHP.'
            ,'I have maintained, operated, developed Gamess servers(Windows/Linux) since 2011.'
          ]
        },
        {
          company: 'FreeLancer',
          title : 'Software Engineer (2011.02~2016.02)',
          description : [
            'Participated in a lot of software and improved software development skills like Java, PL/SQL, Spring, Node.js, Ionic, etc. mostly web projects.'
            ,'Projects : Korea University IRB system, Korea University Open API, Hantech Media - History Management System, (Spring, Mybatis, PHP, Javascript, HTML)'
            +'Websites on Dept. of Brain of Korea University (PHP, Javascript, HTML),  Qplace analyze System(PHP, HTML, Javascript), etc'
          ]
        }
      ]
    }
  }
}
</script>
