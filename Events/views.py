from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Event
from .serializers import EventSerializer

from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny

class EventList(APIView):
    permission_classes = (AllowAny,)
    def get(self, request):
        # Listar todos los eventos
        events = Event.objects.all()
        serializer = EventSerializer(events, many=True)
        return Response(serializer.data)


class EventPost(APIView):
    permission_classes = (AllowAny,)
    def post(self, request):
        # Crear un nuevo evento
        serializer = EventSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

class EventDetail(APIView):
    permission_classes = (AllowAny,)
    def get_object(self, pk):
        # Recuperar un evento individual
        try:
            return Event.objects.get(pk=pk)
        except Event.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        event = self.get_object(pk)
        serializer = EventSerializer(event)
        return Response(serializer.data)

    def put(self, request, pk):
        event = self.get_object(pk)
        serializer = EventSerializer(event, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    def delete(self, request, pk):
        event = self.get_object(pk)
        event.delete()
        return Response(status=204)
