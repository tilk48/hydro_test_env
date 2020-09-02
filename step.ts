import {runApp} from "hydro-sdk/runtime/flutter/runApp";
import {MaterialApp} from "hydro-sdk/runtime/flutter/material/materialApp";
import {Text} from "hydro-sdk/runtime/flutter/widgets/text";
import {Scaffold} from "hydro-sdk/runtime/flutter/material/scaffold";
import {AppBar} from "hydro-sdk/runtime/flutter/material/appBar";
import {Widget} from "hydro-sdk/runtime/flutter/widget";

runApp((title: string, body: Widget) => 
{
    return new MaterialApp({
        title: title,
        home: new Scaffold({
            appBar: new AppBar({
                title: new Text(title),
            }),
            body: body
        })
    });
});