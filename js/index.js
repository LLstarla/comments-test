(function() {
  angular.module('comments', []).controller('commentsCtrl', function($scope, $sce) {
    var markdown;
    $scope.comments = [
      {
        id: 1,
        author: {
          name: 'Loralee Starla Gentry',
        },
        content: 'Nana, I love you and miss you so much. You will always be in my heart.',
      }
    ];
    $scope.newComment = {};
    markdown = function(string) {
      string = string.replace(/(@.+)@/g, '<span class="reply">$1</span>');
      string = string.replace(/\*\*(.+)\*\*/g, '<strong>$1</strong>');
      string = string.replace(/__(.+)__/g, '<strong>$1</strong>');
      string = string.replace(/\*(.+)\*/g, '<em>$1</em>');
      string = string.replace(/_(.+)_/g, '<em>$1</em>');
      string = string.replace(/``(.+)``/g, '<code>$1</code>');
      string = string.replace(/`(.+)`/g, '<code>$1</code>');
      return string;
    };
    $scope.parseContent = function(content) {
      return $sce.trustAsHtml(content);
    };
    $scope.addNewComment = function() {
      $scope.newComment.id = $scope.comments.length + 1;
      $scope.newComment.content = markdown($scope.newComment.content);
      $scope.newComment.loved = false;
      $scope.comments.push($scope.newComment);
      return $scope.newComment = {};
    };
  });

}).call(this);