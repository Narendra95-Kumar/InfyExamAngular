var _0x29d5=['toString','indexOf','demo@infy.com','Report\x20generated','push','assertionResults','status','passed','modules','moduleName','user_output.json','testReport.txt','stringify','find','Error\x20in\x20generating\x20report','totalNoOfTestCases','split','writeFile','log','Compilation\x20Error\x20in\x20project','testResults','noOfTestCasesPassed','2001','certificationId','emailId','readFile'];(function(_0x12fbb6,_0x29d567){var _0x1ab12d=function(_0x3760ad){while(--_0x3760ad){_0x12fbb6['push'](_0x12fbb6['shift']());}};_0x1ab12d(++_0x29d567);}(_0x29d5,0xb3));var _0x1ab1=function(_0x12fbb6,_0x29d567){_0x12fbb6=_0x12fbb6-0x0;var _0x1ab12d=_0x29d5[_0x12fbb6];return _0x1ab12d;};const fs=require('fs');var reportObj;class Report{constructor(_0x21a43b,_0x40689d,_0x2215ab){this[_0x1ab1('0x1')]=_0x21a43b;this[_0x1ab1('0x0')]=_0x40689d;this[_0x1ab1('0xb')]=_0x2215ab;}}class Module{constructor(_0x27a043,_0x25da30,_0x6a2f29){this[_0x1ab1('0xc')]=_0x27a043;this[_0x1ab1('0x12')]=_0x25da30;this[_0x1ab1('0x18')]=_0x6a2f29;this['noOfTestCasesFailed']=_0x25da30-_0x6a2f29;}}fs[_0x1ab1('0x2')](_0x1ab1('0xe'),(_0x5c9ba5,_0x489580)=>{if(_0x5c9ba5){modules=[];modules[_0x1ab1('0x7')](new Module(_0x1ab1('0x16'),0x0,0x0));evaluationResult=new Report('demo@infy.com',_0x1ab1('0x19'),modules);var _0x489580=JSON['stringify'](evaluationResult);reportGenerator(_0x489580);}else{var _0x25781d=_0x489580[_0x1ab1('0x3')]();reportObj=JSON['parse'](_0x25781d);var _0x489580=jsonGenerator(reportObj);reportGenerator(_0x489580);}});function reportGenerator(_0x52051a){fs[_0x1ab1('0x14')](_0x1ab1('0xd'),_0x52051a,_0x5dab3f=>{if(_0x5dab3f){console[_0x1ab1('0x15')](_0x1ab1('0x11'));}else{console[_0x1ab1('0x15')](_0x1ab1('0x6'));}});}function jsonGenerator(_0x4a4023){var _0x113d1a=[];var _0x577692=[];var _0x3f9c7b=0x0;var _0x49b4b3=0x0;var _0x100cb0=[];for(let _0xa8a468=0x0;_0xa8a468<0x5;_0xa8a468++){for(iterator of _0x4a4023[_0x1ab1('0x17')][_0xa8a468][_0x1ab1('0x8')]){let _0x51792c=![];let _0x38497c=iterator['title'][_0x1ab1('0x13')]('-');if(_0x577692[_0x1ab1('0x4')](_0x38497c[0x0])>-0x1){_0x3f9c7b++;}else{_0x577692[_0x1ab1('0x7')](_0x38497c[0x0]);_0x3f9c7b=0x1;_0x49b4b3=0x0;}if(iterator[_0x1ab1('0x9')]==_0x1ab1('0xa')){_0x49b4b3++;}_0x51792c=_0x113d1a[_0x1ab1('0x10')]((_0x2046d2,_0x3b877d)=>{if(_0x2046d2[_0x1ab1('0xc')]==_0x38497c[0x0]){_0x113d1a[_0x3b877d]={'moduleName':_0x38497c[0x0],'totalNoOfTestCases':_0x3f9c7b,'noOfTestCasesPassed':_0x49b4b3,'noOfTestCasesFailed':_0x3f9c7b-_0x49b4b3};return!![];}});if(!_0x51792c){_0x113d1a['push'](new Module(_0x38497c[0x0],_0x3f9c7b,_0x49b4b3));}}}evaluationResult=new Report(_0x1ab1('0x5'),_0x1ab1('0x19'),_0x113d1a);return JSON[_0x1ab1('0xf')](evaluationResult);}