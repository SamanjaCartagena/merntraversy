const asyncHandler = require('express-async-handler')


const getGoals = asyncHandler(async(req, res)=>{
    res.status(200).json({message:'Get Goals'})
})
//@desc   Set Goal
//@route  POST/api/goals
//@access Private

const setGoal = asyncHandler(async(req, res)=>{
    if(!req.body.text){
      res.status(400)
      throw new error('Please add a text field')
    }
        res.status(200).json({message:'Set goal'})
    
})
//@desc Update goal
//@route PUT /api/goals/:id
//@access Private

const updateGoal = asyncHandler(async(req, res)=>{
    res.status(200).json({message:`Update goal ${req.params.id}`})

})
//@desc Delete goal
//@route DELETE /api/goals/:id
//@access Private

const deleteGoal = asyncHandler(async(req, res)=>{
        res.status(200).json({message:`Delete goal ${req.params.id}`})

})

module.exports={
    getGoals, setGoal, updateGoal, deleteGoal
}