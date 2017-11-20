tags = {};
tags.current_id = 0;

tags.new_tag = function(color, value)
{
        tags.current_id += 1;
        tags["id"+tags.current_id] = {"id": "id"+tags.current_id , "type": "tag", "color": color, "value": value};    
}

tags.new_tag("red", "Rosso");
tags.new_tag("green", "Verde");
tags.new_tag("brown", "Marrone");
tags.new_tag("cyan", "Ciano");
tags.new_tag("blue", "Blu");
tags.new_tag("gray", "Grigio");
tags.new_tag("magenta", "Magenta");
tags.new_tag("yellow", "Giallo");




( // closure
	function()
	{
		var app = angular.module('test', []);
                
                app.controller("Tags", function()
		{
                    this.tags = tags;                    
                    
                    this.remove_tag = function(tag_id)
                    {
                        delete(this.tags[tag_id]);
                    };
                    
                    


		});
                
                app.controller("Cells", function()
                {
                    
                    this.droppa = function(ev)
                    {
                        ev.preventDefault();
                        console.log("Miao");   
                        
                    };
                    
                    
                });
                
        }
)();

/*
brass
a00421/17a


Vigasio




rapportini@gtmonline.it
scaricoparti@gtmonline.it
*/

