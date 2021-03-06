// Still super static, but hey, better than the last version
function ScrollTracker(){
	var services_top, cases_top, about_top, contact_top, current, window;

	/* Should be called whenever the location of a section might change on the screen
	 *
	 * @param window - Window to use
	 * 
	 */
	this.init = function(_window){
		services_top = 0;
		cases_top = 0;
		about_top = 0;
		blog_top = 0;
		contact_top = 0;
		
		current = "";
		window = $(_window);
	}
	
	/* Should be called when the window is scrolled
	 *
	 * @param function cb(oldSection, currentSection) - Will be called if the section changes
	 *
	 */
	this.scroll = function(/* function */ cb){
		var old = current, scrollTop = window.scrollTop();
		
		if(scrollTop >= services_top && scrollTop < cases_top){
			current = "services";
		}else if(scrollTop >= cases_top && scrollTop < about_top){
			current = "cases";
		}else if(scrollTop >= about_top && scrollTop < blog_top){
			current = "about";
		}else if(scrollTop >= blog_top && scrollTop < contact_top){
			current = "blog";
		}else if(scrollTop >= contact_top){
			current = "contact";
		}
		
		if(current != old){
			// We're in the different section
			cb(old, current);
		}
	}
}
