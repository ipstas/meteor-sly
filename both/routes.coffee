Meteor.startup ->

  if Meteor.isClient

    Router.map ->
      @route 'slyDemo',
        path: '/slyDemo'
