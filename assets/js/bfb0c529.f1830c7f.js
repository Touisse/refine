"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[147],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6791:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"Build Fast and Customizable Admin Panel with NestJS",description:"We will prepare a simple `job-posting` application. We will also use the refine framework for the admin panel. The project will consist of two parts, api and admin.",slug:"customizable-admin-panel-with-nestjs",authors:"yildiray",tags:["refine","nestjs","crud","react"],image:"/img/placeholder.png",hide_table_of_contents:!1},o=void 0,l={permalink:"/blog/customizable-admin-panel-with-nestjs",source:"@site/blog/2021-10-4-admin-panel-with-nestjs.md",title:"Build Fast and Customizable Admin Panel with NestJS",description:"We will prepare a simple `job-posting` application. We will also use the refine framework for the admin panel. The project will consist of two parts, api and admin.",date:"2021-10-04T00:00:00.000Z",formattedDate:"October 4, 2021",tags:[{label:"refine",permalink:"/blog/tags/refine"},{label:"nestjs",permalink:"/blog/tags/nestjs"},{label:"crud",permalink:"/blog/tags/crud"},{label:"react",permalink:"/blog/tags/react"}],readingTime:4,hasTruncateMarker:!0,authors:[{name:"Y\u0131ld\u0131ray \xdcnl\xfc",title:"Software Developer",url:"https://github.com/yildirayunlu",imageURL:"https://github.com/yildirayunlu.png",key:"yildiray"}],frontMatter:{title:"Build Fast and Customizable Admin Panel with NestJS",description:"We will prepare a simple `job-posting` application. We will also use the refine framework for the admin panel. The project will consist of two parts, api and admin.",slug:"customizable-admin-panel-with-nestjs",authors:"yildiray",tags:["refine","nestjs","crud","react"],image:"/img/placeholder.png",hide_table_of_contents:!1},prevItem:{title:"Migrating a React-Admin Application to Refine",permalink:"/blog/migrating-a-react-admin-application-to-refine"},nextItem:{title:"Create a Feedback Admin panel in 15 Minutes with Refine and Strapi",permalink:"/blog/create-a-feedback-admin-panel-with-refine-and-strapi"},relatedPosts:[{title:"React 18 Upgrade Guide and New Features",permalink:"/blog/react-18-upgrade-guide",formattedDate:"September 9, 2022",authors:[{name:"Joel Adewole",title:"Web Developer",url:"https://github.com/wolz-codelife",github:"https://github.com/wolz-codelife",linkedin:"https://linkedin.com/in/wolz-codelife",imageURL:"https://github.com/wolz-CODElife.png",key:"joel_adewole"}],readingTime:8.07,date:"2022-09-09T00:00:00.000Z"},{title:"Redirect in React Router V6 with Navigate Component",permalink:"/blog/navigate-react-router-redirect",formattedDate:"September 29, 2022",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:3.925,date:"2022-09-29T00:00:00.000Z"},{title:"Create a Feedback Admin panel in 15 Minutes with Refine and Strapi",permalink:"/blog/create-a-feedback-admin-panel-with-refine-and-strapi",formattedDate:"October 4, 2021",authors:[{name:"Salih \xd6zdemir",title:"Software Developer",url:"https://github.com/salihozdemir",imageURL:"https://github.com/salihozdemir.png",key:"salih"}],readingTime:6.74,date:"2021-10-04T00:00:00.000Z"}],authorPosts:[{title:"Build low-code, customizable and authorization ready (accesscontrol) admin panel with NestJS.",permalink:"/blog/how-to-access-control-with-nestjs",formattedDate:"February 21, 2022",authors:[{name:"Y\u0131ld\u0131ray \xdcnl\xfc",title:"Software Developer",url:"https://github.com/yildirayunlu",imageURL:"https://github.com/yildirayunlu.png",key:"yildiray"}],readingTime:3.19,date:"2022-02-21T00:00:00.000Z"},{title:"Best Open-Source Headless CMS to Try for Your Next Application",permalink:"/blog/open-source-headless-cms",formattedDate:"May 5, 2022",authors:[{name:"Y\u0131ld\u0131ray \xdcnl\xfc",title:"Software Developer",url:"https://github.com/yildirayunlu",imageURL:"https://github.com/yildirayunlu.png",key:"yildiray"}],readingTime:3.425,date:"2022-05-05T00:00:00.000Z"}]},s={authorsImageUrls:[void 0]},p=[{value:"Intro",id:"intro",level:2},{value:"NestJS Rest Api",id:"nestjs-rest-api",level:2},{value:"Refine Admin Panel",id:"refine-admin-panel",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this article, we will prepare a simple ",(0,r.kt)("inlineCode",{parentName:"p"},"job-posting")," application. We will also use the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine"},"refine")," framework for the ",(0,r.kt)("strong",{parentName:"p"},"admin panel"),". The project will consist of two parts, api and admin."),(0,r.kt)("p",null,"All the steps described are in this ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/examples/blog/jobPosting"},"repo"),"."),(0,r.kt)("h2",{id:"intro"},"Intro"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nestjs/nest"},"NestJS")," is a framework for building efficient, scalable Node.js server-side applications. With ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nestjsx/crud"},"nestjsx/crud")," we can add CRUD functions quickly and effortlessly on this framework."),(0,r.kt)("h2",{id:"nestjs-rest-api"},"NestJS Rest Api"),(0,r.kt)("p",null,"To start playing with NestJS you should have node (>= 10.13.0, except for v13) and ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org"},"npm")," installed."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Create Project Folder")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir job-posting-app\ncd job-posting-app\n")),(0,r.kt)("p",null,"Setting up a new project is quite simple with the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.nestjs.com/cli/overview"},"Nest CLI"),". With npm installed, you can create a new Nest project with the following commands in your OS terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i -g @nestjs/cli\nnest new api\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/typeorm/typeorm"},"TypeORM")," is definitely the most mature ORM available in the node.js world. Since it's written in TypeScript, it works pretty well with the Nest framework. I chose mysql as database. TypeORM supports many databases (MySQL, MariaDB, Postgres etc.)"),(0,r.kt)("p",null,"To start with this library we have to install all required dependencies:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @nestjs/typeorm @nestjs/config typeorm mysql2\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create an ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine-hackathon/tree/main/job-posting-app/blob/master/api/.env.example"},".env.example")," file. Here we will save the database information."),(0,r.kt)("li",{parentName:"ul"},"Create and configured a ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine-hackathon/tree/main/job-posting-app/blob/master/api/docker-compose.yml"},"docker-compose")," file for MySQL."),(0,r.kt)("li",{parentName:"ul"},"Create a ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine-hackathon/tree/main/job-posting-app/blob/master/api/ormconfig.ts"},"ormconfig.ts")," file for migrations."),(0,r.kt)("li",{parentName:"ul"},"Add the following scripts to the ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json")," file for migrations.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'"typeorm": "ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js",\n"db:migration:generate": "npm run typeorm -- migration:generate",\n"db:migration:run": "npm run typeorm -- migration:run",\n"db:migration:revert": "npm run typeorm -- migration:revert",\n"db:refresh": "npm run typeorm schema:drop && npm run db:migration:run"\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Import the ",(0,r.kt)("inlineCode",{parentName:"li"},"TypeOrmModule")," into the ",(0,r.kt)("inlineCode",{parentName:"li"},"app.module.ts"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Install nestjsx-crud"),"\nI used ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nestjsx/crud"},"nestjsx-crud")," library because it makes crud functions easier."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @nestjsx/crud @nestjsx/crud-typeorm class-transformer class-validator\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Since the steps to create Entities Controllers, and services are very long, I do not explain step by step. You can check the ",(0,r.kt)("a",{parentName:"em",href:"https://github.com/refinedev/refine-hackathon/tree/main/job-posting-app"},"repo")," for details.")),(0,r.kt)("p",null,"It created these end-points automatically with nestjsx/crud."),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("div",{class:"window"},(0,r.kt)("div",{class:"control red"}),(0,r.kt)("div",{class:"control orange"}),(0,r.kt)("div",{class:"control green"})),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2021-10-4-admin-panel-with-nestjs/api.png",alt:"api"})),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"refine-admin-panel"},"Refine Admin Panel"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Now let's refine the admin panel.")," With ",(0,r.kt)("a",{parentName:"p",href:"https://pankod.github.io/superplate/docs"},"Superplate"),", we can quickly create a ",(0,r.kt)("inlineCode",{parentName:"p"},"refine")," project."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx superplate-cli admin\n")),(0,r.kt)("p",null,"Answer as below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u2714 Select your project type \u203a refine-react\n\u2714 What will be the name of your app \xb7 admin\n\u2714 Package manager: \xb7 Npm\n\u2714 Do you want to use a UI Framework? \xb7 Ant Design\n\u2714 Do you want a customized theme?: \xb7 Yes (Custom Variables)\n\u2714 Router Provider: \xb7 React Router v6\n\u2714 Data Provider: \xb7 nestjsx-crud\n\u2714 Auth Provider: \xb7 None\n\u2714 Do you want to add example pages? \xb7 Yes (Recommended)\n\u2714 Do you want a customized layout? \xb7 Yes\n\u2714 i18n - Internationalization: \xb7 No\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd admin\nnpm run dev\n")),(0,r.kt)("p",null,"Refine's sample application will welcome you."),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("div",{class:"window"},(0,r.kt)("div",{class:"control red"}),(0,r.kt)("div",{class:"control orange"}),(0,r.kt)("div",{class:"control green"})),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2021-10-4-admin-panel-with-nestjs/refine_sample.png",alt:"refine_sample"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"Change api url in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine-hackathon/tree/main/job-posting-app/blob/master/admin/src/App.tsx"},"admin/src/App.tsx")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'const API_URL = "http://localhost:3000";\n')),(0,r.kt)("p",null,"Let's add the listing page in refine for the ",(0,r.kt)("inlineCode",{parentName:"p"},"companies")," crud end-point."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/admin/src/pages/companies/list.tsx"',title:'"/admin/src/pages/companies/list.tsx"'},'import {\n  List,\n  Table,\n  TextField,\n  useTable,\n  IResourceComponentsProps,\n  getDefaultSortOrder,\n  Space,\n  EditButton,\n  DeleteButton,\n  TagField,\n  ShowButton,\n} from "@pankod/refine";\nimport { ICompany } from "interfaces";\n\nexport const CompanyList: React.FC<IResourceComponentsProps> = () => {\n  const { tableProps, sorter } = useTable<ICompany>({\n    initialSorter: [\n      {\n        field: "id",\n        order: "desc",\n      },\n    ],\n  });\n\n  return (\n    <List>\n      <Table {...tableProps} rowKey="id">\n        <Table.Column\n          dataIndex="id"\n          key="id"\n          title="ID"\n          render={(value) => <TextField value={value} />}\n          defaultSortOrder={getDefaultSortOrder("id", sorter)}\n          sorter\n        />\n        <Table.Column\n          dataIndex="name"\n          key="name"\n          title="Name"\n          render={(value) => <TextField value={value} />}\n          defaultSortOrder={getDefaultSortOrder("name", sorter)}\n          sorter\n        />\n        <Table.Column\n          dataIndex="location"\n          key="location"\n          title="Location"\n          render={(value) => <TextField value={value} />}\n          defaultSortOrder={getDefaultSortOrder("location", sorter)}\n          sorter\n        />\n        <Table.Column\n          dataIndex="isActive"\n          key="isActive"\n          title="Is Active"\n          render={(value) => <TagField value={value} />}\n          defaultSortOrder={getDefaultSortOrder("status", sorter)}\n          sorter\n        />\n        <Table.Column<ICompany>\n          title="Actions"\n          dataIndex="actions"\n          render={(_, record) => (\n            <Space>\n              <EditButton hideText size="small" recordItemId={record.id} />\n              <ShowButton hideText size="small" recordItemId={record.id} />\n              <DeleteButton hideText size="small" recordItemId={record.id} />\n            </Space>\n          )}\n        />\n      </Table>\n    </List>\n  );\n};\n')),(0,r.kt)("p",null,"Similarly, let's add the create, edit and jobs crud pages under the pages folder."),(0,r.kt)("p",null,"Next, let's define the resources in ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine>")," (App.tsx):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine } from "@pankod/refine";\nimport routerProvider from "@pankod/refine-react-router";\nimport nestjsxCrudDataProvider from "@pankod/refine-nestjsx-crud";\n\nimport "styles/antd.less";\n\nimport {\n    CompanyList,\n    CompanyShow,\n    CompanyCreate,\n    CompanyEdit,\n} from "./pages/companies";\nimport {\n    Title,\n    Header,\n    Sider,\n    Footer,\n    Layout,\n    OffLayoutArea,\n} from "components";\nimport { JobList, JobCreate, JobEdit } from "pages/jobs";\n\nfunction App() {\n    const API_URL = "http://localhost:3000";\n    const dataProvider = nestjsxCrudDataProvider(API_URL);\n\n    return (\n        <Refine\n            dataProvider={dataProvider}\n            Title={Title}\n            Header={Header}\n            Sider={Sider}\n            Footer={Footer}\n            Layout={Layout}\n            OffLayoutArea={OffLayoutArea}\n            routerProvider={routerProvider}\n            resources={[\n                {\n                    name: "companies",\n                    list: CompanyList,\n                    create: CompanyCreate,\n                    edit: CompanyEdit,\n                    show: CompanyShow,\n                },\n                {\n                    name: "jobs",\n                    list: JobList,\n                    create: JobCreate,\n                    edit: JobEdit,\n                    show: CompanyShow,\n                },\n            ]}\n        />\n')),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("div",{class:"window"},(0,r.kt)("div",{class:"control red"}),(0,r.kt)("div",{class:"control orange"}),(0,r.kt)("div",{class:"control green"})),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2021-10-4-admin-panel-with-nestjs/refine_job.png",alt:"refine_job"})),(0,r.kt)("br",null))}m.isMDXComponent=!0}}]);