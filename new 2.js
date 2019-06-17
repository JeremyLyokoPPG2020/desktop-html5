var html = {
	file: '<div class="window active" data-taskbar="file">' +
			'		<div class="toolbar">' +
			'			<div class="row">' +
			'				<i class="fa fa-code-fork"></i>' +
			'				<span id="rf"></span>' +
			'			</div><div class="row">' +
			'				<a class="panel close"><i class="fa fa-times"></i></a>' +
			'				<a class="panel maximize"><i class="fa fa-window-maximize"></i></a>' +
			'				<a class="panel minimize"><i class="fa fa-minus"></i></a>' +
			'			</div>' +
			'		</div>' +
			'		<div class="board"><div id="fba"></div></div>' +
			'	</div>',
	internet: '<div class="window active" data-taskbar="internet">' +
			'		<div class="toolbar">' +
			'			<div class="row">' +
			'				<i class="fa fa-globe"></i>' +
			'			</div><div class="row">' +
			'				<a class="panel close"><i class="fa fa-times"></i></a>' +
			'				<a class="panel maximize"><i class="fa fa-window-maximize"></i></a>' +
			'				<a class="panel minimize"><i class="fa fa-minus"></i></a>' +
			'			</div>' +
			'		</div>' +
			'		<div class="board"><div id="addressbar">' +
			'			<div class="input">' +
			'				<input type="url" id="addr" placeholder="URL">' +
			'			</div><div class="input">' +
			'				<input type="text" placeholder="Search">' +
			'			</div>' +
			'		</div>' +
			'		<div id="site"></div></div>' +
			'	</div>',
	video: '<div class="window active" data-taskbar="video">' +
			'		<div class="toolbar black">' +
			'			<div class="row">' +
			'				<i class="fa fa-play-circle"></i> <span id="ycp-rf"></span>' +
			'			</div><div class="row">' +
			'				<a class="panel close"><i class="fa fa-times"></i></a>' +
			'				<a class="panel maximize"><i class="fa fa-window-maximize"></i></a>' +
			'				<a class="panel minimize"><i class="fa fa-minus"></i></a>' +
			'			</div>' +
			'		</div>' +
			'		<div class="board" id="ycp" data-ycp_title="Demo - Bachors.com" data-ycp_channel="UCoiS7s7HrE7bHNuzERi-FCQ"></div>' +
			'	</div>',
	console: '<div class="window active" data-taskbar="console">' +
			'		<div class="toolbar">' +
			'			<div class="row">' +
			'				<i class="fa fa-terminal"></i>' +
			'			</div><div class="row">' +
			'				<a class="panel close"><i class="fa fa-times"></i></a>' +
			'				<a class="panel maximize"><i class="fa fa-window-maximize"></i></a>' +
			'				<a class="panel minimize"><i class="fa fa-minus"></i></a>' +
			'			</div>' +
			'		</div>' +
			'		<div class="board"><textarea id="yourcode" autocorrect="off" spellcheck="false">-----------------------------------' +
'\nSkulpt Python\n' +
'-----------------------------------\n#>> print "Hello World"</textarea></div>' +
			'	</div>',
	music: '<div class="window active" data-taskbar="music">' +
			'		<div class="toolbar black">' +
			'			<div class="row">' +
			'				<i class="fa fa-headphones"></i> <span id="scp-rf"></span>' +
			'			</div><div class="row">' +
			'				<a class="panel close"><i class="fa fa-times"></i></a>' +
			'				<a class="panel maximize"><i class="fa fa-window-maximize"></i></a>' +
			'				<a class="panel minimize"><i class="fa fa-minus"></i></a>' +
			'			</div>' +
			'		</div>' +
			'		<div class="board" id="scp"></div>' +
			'	</div>',
	photoshop: '<div class="window active" data-taskbar="photoshop">' +
			'		<div class="toolbar black">' +
			'			<div class="row">' +
			'				<i class="fa fa-photo"></i>' +
			'			</div><div class="row">' +
			'				<a class="panel close"><i class="fa fa-times"></i></a>' +
			'				<a class="panel maximize"><i class="fa fa-window-maximize"></i></a>' +
			'				<a class="panel minimize"><i class="fa fa-minus"></i></a>' +
			'			</div>' +
			'		</div>' +
			'		<div class="board"><iframe src="https://pixlr.com/editor/"></iframe></div>' +
			'	</div>',
	calculator: '<div class="window calculator active" data-taskbar="calculator">' +
			'		<div class="toolbar">' +
			'			<div class="row">' +
			'				<i class="fa fa-calculator"></i>' +
			'			</div><div class="row">' +
			'				<a class="panel close"><i class="fa fa-times"></i></a>' +
			'				<a class="panel minimize"><i class="fa fa-minus"></i></a>' +
			'			</div>' +
			'		</div>' +
			'		<div class="board"><center><form name="sci-calc"><table cellspacing="0" cellpadding="1"><tr><td colspan="5" align="center"><input type="text" name="display" class="form-control" value="0" size="32" maxlength="36"></td></tr><tr><td align="center"><input type="button" class="btn btn-primary klu" value=" exp " onclick="if (checkNum(this.form.display.value)) { exp(this.form) }"></td><td align="center"><input type="button" class="btn btn-primary klu" value=" ln " onclick="if (checkNum(this.form.display.value)) { ln(this.form) }"></td><td align="center"><input type="button" class="btn btn-primary klu" value=" sqrt " onclick="if (checkNum(this.form.display.value)) { sqrt(this.form) }"></td><td align="center"><input type="button" class="btn btn-primary klu" value=" sq " onclick="if (checkNum(this.form.display.value)) { square(this.form) }"></td></tr><tr><td align="center"><input type="button" class="btn btn-primary klu" value=" 7 " onclick="addChar(this.form.display, \'7\')"></td><td align="center"><input type="button" class="btn btn-primary klu" value=" 8 " onclick="addChar(this.form.display, \'8\')"></td><td align="center"><input type="button" class="btn btn-primary klu" value=" 9 " onclick="addChar(this.form.display, \'9\')"></td><td align="center"><input type="button" class="btn btn-primary klu" value=" / " onclick="addChar(this.form.display, \'/\')"></td></tr><tr><td align="center"><input type="button" class="btn btn-primary klu" value=" 4 " onclick="addChar(this.form.display, \'4\')"></td><td align="center"><input type="button" class="btn btn-primary klu" value=" 5 " onclick="addChar(this.form.display, \'5\')"></td><td align="center"><input type="button" class="btn btn-primary klu" value=" 6 " onclick="addChar(this.form.display, \'6\')"></td><td align="center"><input type="button" class="btn btn-primary klu" value=" * " onclick="addChar(this.form.display, \'*\')"></td></tr><tr><td align="center"><input type="button" class="btn btn-primary klu" value=" 1 " onclick="addChar(this.form.display, \'1\')"></td><td align="center"><input type="button" class="btn btn-primary klu" value=" 2 " onclick="addChar(this.form.display, \'2\')"></td><td align="center"><input type="button" class="btn btn-primary klu" value=" 3 " onclick="addChar(this.form.display, \'3\')"></td><td align="center"><input type="button" class="btn btn-primary klu" value=" - " onclick="addChar(this.form.display, \'-\')"></td></tr><tr><td align="center"><input type="button" class="btn btn-primary klu" value=" 0 " onclick="addChar(this.form.display, \'0\')"></td><td align="center"><input type="button" class="btn btn-primary klu" value=" . " onclick="addChar(this.form.display, \'.\')"></td><td align="center"><input type="button" class="btn btn-primary klu" value=" +/- " onclick="changeSign(this.form.display)"></td><td align="center"><input type="button" class="btn btn-primary klu" value=" + " onclick="addChar(this.form.display, \'+\')"></td></tr><tr><td align="center"><input type="button" class="btn btn-primary klu" value=" ( " onclick="addChar(this.form.display, \'(\')"></td><td align="center"><input type="button" class="btn btn-primary klu" value="cos" onclick="if (checkNum(this.form.display.value)) { cos(this.form) }"></td><td align="center"><input type="button" class="btn btn-primary klu" value=" sin" onclick="if (checkNum(this.form.display.value)) { sin(this.form) }"></td><td align="center"><input type="button" class="btn btn-primary klu" value=" tan" onclick="if (checkNum(this.form.display.value)) { tan(this.form) }"></td></tr><tr><td align="center"><input type="button" class="btn btn-primary klu" value=" ) " onclick="addChar(this.form.display, \')\')"></td><td align="center"><input type="button" class="btn btn-primary klu" value="AC" onclick="this.form.display.value = 0 "></td><td align="center"><input type="button" class="btn btn-primary klu" value="DEL" onclick="deleteChar(this.form.display)"></td><td align="center"><input type="button" class="btn btn-primary klu" value="=" name="enter" onclick="if (checkNum(this.form.display.value)) { compute(this.form) }"></td></tr></table></form></center></div>' +
			'	</div>',
	games: '<div class="window games active" data-taskbar="games">' +
			'		<div class="toolbar">' +
			'			<div class="row">' +
			'				<i class="fa fa-gamepad"></i> <span>WannaCry</span>' +
			'			</div><div class="row">' +
			'				<a class="panel close"><i class="fa fa-times"></i></a>' +
			'				<a class="panel minimize"><i class="fa fa-minus"></i></a>' +
			'			</div>' +
			'		</div>' +
			'		<div id="manuk"></div>' +
			'	</div>'
}

function addChar(e,t){if(e.value==null||e.value=="0")e.value=t;else e.value+=t}function cos(e){e.display.value=Math.cos(e.display.value)}function sin(e){e.display.value=Math.sin(e.display.value)}function tan(e){e.display.value=Math.tan(e.display.value)}function sqrt(e){e.display.value=Math.sqrt(e.display.value)}function ln(e){e.display.value=Math.log(e.display.value)}function exp(e){e.display.value=Math.exp(e.display.value)}function deleteChar(e){e.value=e.value.substring(0,e.value.length-1)}function changeSign(e){if(e.value.substring(0,1)=="-")e.value=e.value.substring(1,e.value.length);else e.value="-"+e.value}function compute(form){form.display.value=eval(form.display.value)}function square(form){form.display.value=eval(form.display.value)*eval(form.display.value)}function checkNum(e){for(var t=0;t<e.length;t++){var n=e.substring(t,t+1);if(n<"0"||n>"9"){if(n!="/"&&n!="*"&&n!="+"&&n!="-"&&n!="."&&n!="("&&n!=")"){alert("entri yang tidak valid!");return false}}}return true}

$( function() { 
	$( ".openapp" ).click(function(){
		if($('.showing').length){
			$( ".showing" ).removeClass('active');
		}
		var data = $(this).data('html');
		if(!$('#taskbar .' + data).length){
			if($( ".window" )){
				$( ".window" ).removeClass('active');
			}
			$('#desktop').append(html[data]);
			if(data == 'file'){
				fba({github:{user:'bachors',repos:['jQuery-File-Browser-Awesome','CI-FIle-Browser-Awesome','jQuery-Github-Repos-Feed','jQuery-iBacor-Facebook-Streaming','jQuery-Github-Feed','jQuery-Youtube-Channels-Playlist','jQuery-Awesome-Sosmed-Share-Button','Apps-Screenshot','PHP-sending-emails-to-multiple-recipients','kodepos-indonesia.sql','Img2Blob.js','Imap_parser.php','Visitor-Parser-JS','Chat-Realtime','jQuery-Stackoverflow-Search','jQuery-Prefix-Input','GSM-Arena-API','bintangin.js','ChatWs','jQuery-my-instagram-gallery','Soundcloud-Player','HTTP-Compression-Tester','htmlfromrss.js','jQuery-Facebook-Fans-Page-Albums','Disqusin.js','CodingDong','jQuery-My-Dribbble-Gallery','jQuery-iBacor-Google-Plus-Streaming','TVTeditor','TMDb7','bcralnit.js']},mode:{html:'text/html',css:'text/css',js:'text/javascript',php:'application/x-httpd-php',json:'application/json'}});
			}else if(data == 'video'){
				$("#ycp").ycp({
					apikey : 'xxx',
					autoplay : true
				});
			}else if(data == 'music'){
				scp(
					auto_play = true,
					client_id = 'xxx'
				);
			}else if(data == 'games'){
// Initialize Phaser, and creates a 400x490px game
var game = new Phaser.Game(400, 490, Phaser.AUTO, 'manuk');

// Creates a new 'main' state that will contain the game
var mainState = {

    // Function called first to load all the assets
    preload: function() { 
        // Change the background color of the game
        game.stage.backgroundColor = '#71c5cf';

        // Load the bird sprite
        game.load.image('bird', 'img/yg.png');  

        // Load the pipe sprite
        game.load.image('pipe', 'img/dt.png');      
    },

    // Fuction called after 'preload' to setup the game 
    create: function() { 
        // Set the physics system
        game.physics.startSystem(Phaser.Physics.ARCADE);

        // Display the bird on the screen
        this.bird = this.game.add.sprite(100, 245, 'bird');
        
        // Add gravity to the bird to make it fall
        game.physics.arcade.enable(this.bird);
        this.bird.body.gravity.y = 1000; 

        // Call the 'jump' Press the spacebar or double-tap to jump
        this.game.input.onTap.add(this.jump, this); 

        // Create a group of 20 pipes
        this.pipes = game.add.group();
        this.pipes.enableBody = true;
        this.pipes.createMultiple(20, 'pipe');  

        // Timer that calls 'addRowOfPipes' ever 1.5 seconds
        this.timer = this.game.time.events.loop(1500, this.addRowOfPipes, this);           

        // Add a score label on the top left of the screen
        this.score = 0;
        this.labelScore = this.game.add.text(20, 20, "0", { font: "30px Arial", fill: "#ffffff" });  
    },

    // This function is called 60 times per second
    update: function() {
        // If the bird is out of the world (too high or too low), call the 'restartGame' function
        if (this.bird.inWorld == false)
            this.restartGame(); 

        // If the bird overlap any pipes, call 'restartGame'
        game.physics.arcade.overlap(this.bird, this.pipes, this.restartGame, null, this);      
    },

    // Make the bird jump 
    jump: function() {
        // Add a vertical velocity to the bird
        this.bird.body.velocity.y = -350;
    },

    // Restart the game
    restartGame: function() {
        // Start the 'main' state, which restarts the game
        game.state.start('main');
    },

    // Add a pipe on the screen
    addOnePipe: function(x, y) {
        // Get the first dead pipe of our group
        var pipe = this.pipes.getFirstDead();

        // Set the new position of the pipe
        pipe.reset(x, y);

        // Add velocity to the pipe to make it move left
        pipe.body.velocity.x = -200; 
               
        // Kill the pipe when it's no longer visible 
        pipe.checkWorldBounds = true;
        pipe.outOfBoundsKill = true;
    },

    // Add a row of 6 pipes with a hole somewhere in the middle
    addRowOfPipes: function() {
        var hole = Math.floor(Math.random()*5)+1;
        
        for (var i = 0; i < 8; i++)
            if (i != hole && i != hole +1) 
                this.addOnePipe(400, i*60+10);   
    
        this.score += 1;
        this.labelScore.text = this.score;  
    },
};

// Add and start the 'main' state to start the game
game.state.add('main', mainState);  
game.state.start('main'); 
			}
			$('#taskbar').append('<a class="showing ' + data + ' active" data-minimize="yes">' + $(this).find('span').html() + '</a>');
			$( ".window" ).draggable({
				cancel: ".board"
			});
			$( ".window" ).resizable({
				cancel: ".calculator, .games"
			});
			return false;
		}
	}); 
	$( "body" ).on('click', '.window', function(){
		var data = $(this).data('taskbar');
		if($(this).hasClass("active") === false){
			$( ".window" ).removeClass('active');
			$( ".showing" ).removeClass('active');
			$(this).addClass('active');
			$('#taskbar .' + data).addClass('active');
		}
		return false;
	});
	$( "body" ).on('click', '.maximize', function(){
		$(this).removeClass('maximize');
		$(this).addClass('restore');
		$(this).find('i').removeClass('fa-window-maximize');
		$(this).find('i').addClass('fa-window-restore');
		$(this).parent().parent().parent().css('width', '100%');
		$(this).parent().parent().parent().css('top', '0px');
		$(this).parent().parent().parent().css('left', '0px');
		$(this).parent().parent().parent().css('height', '100%');
		return false;
	});
	$( "body" ).on('click', '.restore', function(){
		$(this).removeClass('restore');
		$(this).addClass('maximize');
		$(this).find('i').removeClass('fa-window-restore');
		$(this).find('i').addClass('fa-window-maximize');
		$(this).parent().parent().parent().css('width', '900px');
		$(this).parent().parent().parent().css('top', '50px');
		$(this).parent().parent().parent().css('left', '100px');
		$(this).parent().parent().parent().css('height', '500px');
		return false;
	});
	$( "body" ).on('click', '.close', function(){
		$(this).parent().parent().parent().remove();
		var i = $(this).parent().parent().parent().data('taskbar');
		$('#taskbar .' + i).remove();
		return false;
	});
	$( "body" ).on('click', '.minimize', function(){
		$(this).parent().parent().parent().hide();
		var i = $(this).parent().parent().parent().data('taskbar');
		$('#taskbar .' + i).removeClass('active');
		return false;
	});
	$( "body" ).on('click', '.showing', function(){
		var x = $(this).index() - 2;
		if($(this).data('minimize') == 'yes'){
			$('.window').eq(x).hide();
			$(this).data('minimize', 'no');
			$(this).removeClass('active');
		}else{
			$('.window').eq(x).show();
			$( ".window" ).removeClass('active');
			$('.window').eq(x).addClass('active');
			$(this).data('minimize', 'yes');
			$('.showing').removeClass('active');
			$(this).addClass('active');
		}
		return false;
	});
	$("body").on('keypress', '#addr', function(e){
		if (e.which == 13) {
			$('#site').html('<iframe id="loadurl"></iframe>');
			SetFrameURL($(this).val());
			return false; 
		}
	});
	$("body").on('keypress', '#yourcode', function(e){
		if (e.which == 13) {
			if(e.shiftKey){
				document.getElementById("yourcode").value += '\n';
			}else{
				document.getElementById("yourcode").value += '\n';
				var prog = document.getElementById("yourcode").value,
					code = prog.split('#>> ');
				runit(code[code.length - 1]);
				document.getElementById("yourcode").value += '\n#>> ';
			}
			return false; 
		}
	});
	
	setTimeout(tampilkanwaktu, 1000);
});

function tampilkanwaktu() {
    var sekarang = new Date();
    var detik = sekarang.getSeconds();
    var stringdetik = (detik < 10) ? "0" + (detik.toString()) : (detik.toString());
    var menit = sekarang.getMinutes();
    var stringmenit = (menit < 10) ? "0" + (menit.toString()) : (menit.toString());
    var jam = sekarang.getHours();
    var stringjam = (jam < 10) ? "0" + (jam.toString()) : (jam.toString());
	var dn="AM"
	if (stringjam>=12)
	dn="PM"
    $("#taskbar span").html(stringjam + ":" + stringmenit + " " + dn + "<br>" + sekarang.getDate() + "/" + sekarang.getMonth() + "/" + sekarang.getFullYear());
    setTimeout(tampilkanwaktu, 1000);
}

function SetFrameURL(addr) {
	//if (addr.substring(0, 7) != "//" && addr.substring(0, 8) != "https://") addr = "//" + addr;
	var frame = document.getElementById('loadurl');
	frame.src = addr;
}

function outf(text) {
   var mypre = document.getElementById("yourcode");
   mypre.value += text;
}

function builtinRead(x)
{
    if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
        throw "File not found: '" + x + "'";		
	
    return Sk.builtinFiles["files"][x];
}

function runit(prog) {   
	Sk.configure({output:outf,
		read: builtinRead
	});
	try {
		Sk.importMainWithBody("<stdin>",false,prog);
	} catch (e) {
		document.getElementById("yourcode").value += e + '\n';
	}
}