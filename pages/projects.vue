<template>
  <v-container>
      <v-row class="mt-2">
        <v-col>
          <v-row class="">Technicals <v-chip x-small class="mt-1 ml-1">All</v-chip></v-row>
          <v-row class="mt-3" v-for="(value, key) in technicals">
            {{key}} : <v-chip class="mt-1 ml-1" x-small v-for="(item, index) in value">{{item}}</v-chip>
          </v-row>
        </v-col>
      </v-row>
      <v-row class="mt-5" align="left">
        <v-card v-for="(item, index) in projects" :key="index"
          class="mx-auto mt-1"
          max-width="280px"
          outlined
        >
          <v-card-text>
            <p class="subtitle-1 text--primary">
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
</v-container>
</template>

<script>
export default{
  data(){
    return {
      technicals:{
        "Language" : ["C", "C#", "Java", "PHP", "Python", "Javascript", "SQL"],
        "OS" : ["Linux", "Windows"],
        "Framework" : ["Spring", ".NET(C#)", "Node.js", "Ionic", "Vue.js"],
        "Etc" : ["React-native", "Jenkins", "Tmax"],
      },
      projects:[
        {
          title:"GameSS (2011~)",
          desc:"GameSS(www.gamess.co.kr) is Korean Game community site having 2 million members. I have been Technical Engineer since 2011."
            +"멤버 관련 해왔고, migraion 및 infra 및 application 유지 보수 등을 해왔다."
          ,
          tags:["Javascript","PHP"]
        },
        {
          title:"GameSS (www.gamess.co.kr, 2011~)",
          desc:"GameSS is Korean Game community site having 2 million members. I have been Technical Engineer since 2011."
            +"멤버 관련 해왔고, migraion 및 infra 및 application 유지 보수 등을 해왔다."
          ,
          tags:["Javascript","PHP"]
        },
        {
          title:"GameSS (www.gamess.co.kr, 2011~)",
          desc:"GameSS is Korean Game community site having 2 million members. I have been Technical Engineer since 2011."
            +"멤버 관련 해왔고, migraion 및 infra 및 application 유지 보수 등을 해왔다."
          ,
          tags:["Javascript","PHP"]
        },
        {
          title:"GameSS (www.gamess.co.kr, 2011~)",
          desc:"GameSS is Korean Game community site having 2 million members. I have been Technical Engineer since 2011."
            +"멤버 관련 해왔고, migraion 및 infra 및 application 유지 보수 등을 해왔다."
          ,
          tags:["Javascript","PHP"]
        },
        {
          title:"GameSS (www.gamess.co.kr, 2011~)",
          desc:"GameSS is Korean Game community site having 2 million members. I have been Technical Engineer since 2011."
            +"멤버 관련 해왔고, migraion 및 infra 및 application 유지 보수 등을 해왔다."
          ,
          tags:["Javascript","PHP"]
        },
        {
          title:"GameSS (www.gamess.co.kr, 2011~)",
          desc:"GameSS is Korean Game community site having 2 million members. I have been Technical Engineer since 2011."
            +"멤버 관련 해왔고, migraion 및 infra 및 application 유지 보수 등을 해왔다."
          ,
          tags:["Javascript","PHP"]
        },
        {
          title:"GameSS (www.gamess.co.kr, 2011~)",
          desc:"GameSS is Korean Game community site having 2 million members. I have been Technical Engineer since 2011."
            +"멤버 관련 해왔고, migraion 및 infra 및 application 유지 보수 등을 해왔다."
          ,
          tags:["Javascript","PHP"]
        }
      ]
    }
  }
}
</script>
