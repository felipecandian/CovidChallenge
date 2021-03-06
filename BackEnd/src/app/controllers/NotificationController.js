import Notification from '../schemas/Notification';

class NotificationController {
   async index(req, res) {
      const { userType } = req.typeUser;
      const { userId } = req;

      const notifications = await Notification.find({
         user_id: userId,
         type_user: userType,
      })
         .sort({ createdAt: 'desc' })
         .limit(20);

      return res.json(notifications);
   }

   async update(req, res) {
      const notification = await Notification.findByIdAndUpdate(
         req.params.id,
         { read: true },
         { new: true }
      );

      return res.json(notification);
   }
}

export default new NotificationController();
