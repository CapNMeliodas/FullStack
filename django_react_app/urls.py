from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns

from . import views


urlpatterns = [
    # router.urls,
    path('api/my_badges/', views.BadgeUserList.as_view()),
    path('api/my_badges/<int:id>', views.BadgeUserList.as_view()),
    path('api/on_sale', views.SellingBadgeList.as_view())
]

urlpatterns = format_suffix_patterns(urlpatterns)
