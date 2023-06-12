export class OpenAIResponse{
    /**
     *
     */
    constructor(defoutput:string) {
        this.choices = new Array<AiChoices>()
        this.choices.push(new AiChoices(defoutput));

    }
id:string="";
object:string="";
created:string="";
model:string="";
choices:AiChoices[]= new Array<AiChoices>();
usage:AiUsage[]= new Array<AiUsage>();
}

export class AiChoices{
    /**
     *
     */
    constructor(testoutput:string ) {
         this.text = testoutput;
    }
    text:string="";
    index:number=0;
    logprobs:string="";
    finish_reason:string="";

}

export class AiUsage{
    prompt_tokens:number=0;
    completion_tokens:number=0;
    total_tokens:number=0;
}

