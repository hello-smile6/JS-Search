                    setInterval(function() {
                        var search=document.getElementById("page-search");
                        var results=document.getElementsByClassName("search_result");
                        for(var a=0;a<results.length;a++) {
                            results[a].style.display="none";
                        }
                        var relevant=document.getElementsByClassName(search.value);
                        for(var a=0;a<relevant.length;a++) {
                            relevant[a].style.display="block";
                        }
                        if(search.value.length==0) {
                            for(var a=0;a<results.length;a++) {
                            results[a].style.display="block";    
                            }
                        }
                    },1);
