It's weird as shit to look like, but the first thing you do is create the tool in the menu and give the function a name, after that the parameters to create an instruction are the 

-menu name, 
-the tool name it was created with (which is the path where the tool is stored),
-the instruction type, for here we supplant the original function, 
-a name for papyrus callback, I think this is optional but it's gonna be what you want either way. Make sure to register a mod event to the name of the tool, underscore, mod papyrus callback name
-then it's the function you want to supplant. How this works is "_-1" means the main object, or whatever has the actual menu scripts to manipulate. So in this case, "_-1.onItemSelect" means barterMenu.onItemSelect
-I'll have to get back to you on what params is,
-Block activation is a prebuilt rule set, don't know if you'll need it or not, but what this rule set does is include papyrus callbacks, and prevents the original from firing.
-formPath is what form is sent to the function registered above
[6:01 PM]
BARTER_MENU was a constant I made, it's just "BarterMenu" or something like that
[6:03 PM]
Also it would seem params are basically just 

string[] params = Utility.CreateStringArray(1, "-1")

I think it only matters for instructions that actually use parameters, but I'll need to look at the source code to check

All things with MCR and buypress need to be replaced with my own callbacks
MCR stuff I can decide myself
// ToolUI.CreateTool(CONTAINERMENU, "YM_FunctionTest")
// ToolUI.CreateInstruct(CONTAINERMENU, "YM_FunctionTest", "supplantfunction", "selectPress", "*_-1.onItemSelect", params, "BlockActivation", formPath = "*_-1.inventoryLists.itemList.selectedEntry.formId");