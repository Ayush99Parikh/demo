/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IntervalWhereUniqueInput } from "./IntervalWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteIntervalArgs {
  @ApiProperty({
    required: true,
    type: () => IntervalWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => IntervalWhereUniqueInput)
  @Field(() => IntervalWhereUniqueInput, { nullable: false })
  where!: IntervalWhereUniqueInput;
}

export { DeleteIntervalArgs as DeleteIntervalArgs };