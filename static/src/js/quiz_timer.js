odoo.define('quiz_time.quiz', function (require) {
   var PublicWidget = require('web.public.widget');
   var rpc = require('web.rpc');
   var IdleTime = PublicWidget.Widget.extend({
       selector: '.o_survey_form',
       start: function () {
       var quiz_timer
       this._rpc({
            model: 'ir.config_parameter',
            method: 'get_param',
            args: ['quiz_time.quiz_timer'],
       }).then(function(result){
             quiz_timer = result
        });
        let time=0;
        var currentTime;
        window.onmousemove = resetTimer;
        window.onclick = resetTimer;
        window.onkeypress = resetTimer;

        function resetTimer() {
        this.$('.idle_timer').hide();
        clearTimeout(time);
        currentTime=quiz_timer
        time = setInterval(startTimer, 2000)
        }
         function startTimer() {
         currentTime=currentTime-1
         this.$('.idle_timer').show();
         this.$('.idle_time').empty();
         this.$('.idle_time').append(currentTime);
         if (currentTime==0){
                 $('.btn-primary').click();
                 resetTimer();}
        }
        },
   });
   PublicWidget.registry.o_survey_form = IdleTime;
   return IdleTime;
});